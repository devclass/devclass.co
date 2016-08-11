'use strict'

const r = require('express').Router()
const path = require('path')

r.get('*', function (req, res) {
  console.dir(req.headers)
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = r
