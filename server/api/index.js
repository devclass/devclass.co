'use strict';
var router = require('express').Router()
var bodyParser = require('body-parser')

router.use(bodyParser.json())

var courses = require('./courses')

router.get('/courses', courses.list)
router.get('/courses/:slug', courses.find)
router.use('/admin', require('./admin'))

router.get('*', function (req, res) {
  res.send(404)
})

module.exports = router
