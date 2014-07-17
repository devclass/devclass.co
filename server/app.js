'use strict';
var express = require('express')
var logger  = require('morgan')
var angular = require('./angular')
var github  = require('./github')
var api     = require('./api')
var app = express()

app.use(logger('dev'))
app.use(express.static(__dirname + '/../assets'))
app.use(express.static(__dirname + '/../public'))
app.use('/api', api)
app.get('/admin/*', angular.admin)
app.get('/github/auth', github.redirect)
app.get('/github/auth/callback', github.callback)
app.get('*', angular.main)

var port = process.env.PORT || 3000

var server = app.listen(port, function () {
  console.log('listening on', server.address().port)
})
