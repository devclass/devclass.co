'use strict'

const r = require('express').Router()
const path = require('path')
const helper = require('sendgrid').mail
r.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

r.post('/contact', function (req, res) {
  const TO_EMAIL = 'me@robvella.com'

  let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  let from_email = new helper.Email(req.body.email)
  let to_email = new helper.Email(TO_EMAIL)
  let subject = '[DEVCLASS] Contact Submitted'
  let content = new helper.Content('text/plain', JSON.stringify(req.body));
  let mail = new helper.Mail(from_email, subject, to_email, content)

  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  })

  sg.API(request, function (error, response) {
    if (error) {
      console.error(response.statusCode, response.body, response.headers)
      res.json({ errors: error.message })
    } else {
      res.json({ message: 'ok' })
    }
  })
})


module.exports = r
