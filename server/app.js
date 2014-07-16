'use strict';
var express = require('express')
var logger  = require('morgan')
var angular = require('./angular')
var app = express()

app.use(express.static(__dirname + '/../assets'))
app.use(express.static(__dirname + '/../public'))
app.get('*', angular)

var port = process.env.PORT || 3000

var server = app.listen(port, function () {
  console.log('listening on', server.address().port)
})
