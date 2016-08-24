'use strict'

const r = require('express').Router()
const path = require('path')
const helper   = require('sendgrid').mail

r.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

r.post('/contact', function (req, res) {
  let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  let from_email = new helper.Email("contact@devclass.net")
  let to_email = new helper.Email("me@robvella.com")
  let subject = "Sending with SendGrid is Fun"
  let content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js")
  let mail = new helper.Mail(from_email, subject, to_email, content)

  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  })

  sg.API(request, function(error, response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
  })

  res.send('hehe')
  //res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


module.exports = r
