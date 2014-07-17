'use strict';
var Course = require('../models/course')

exports.list = function (req, res, next) {
  Course.find({upcoming: true})
  .exec(function (err, courses) {
    if (err) { return next(err) }
    res.json(courses)
  })
}

exports.find = function (req, res, next) {
  Course.findOne({slug: req.params.slug})
  .exec(function (err, course) {
    if (err) { return next(err) }
    res.json(course)
  })
}
