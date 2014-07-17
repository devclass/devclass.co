var Course = require('../../models/course')
var slug   = require('slug')

exports.get = function (req, res, next) {
  Course.findOne({slug: req.params.slug})
  .exec(function (err, course) {
    if (err) { return next(err) }
    res.json(course)
  })
}

exports.list = function (req, res, next) {
  Course.find()
  .exec(function (err, courses) {
    if (err) { return next(err) }
    res.json(courses)
  })
}

exports.create = function (req, res, next) {
  var course = new Course({title: req.body.title})
  course.slug = slug(course.title).toLowerCase()
  course.save(function (err, course) {
    if (err) { return next(err) }
    res.json(course)
  })
}

exports.update = function (req, res, next) {
  Course.findOne({slug: req.params.slug})
  .exec(function (err, course) {
    if (err) { return next(err) }
    course.title = req.body.title
    course.subtitle = req.body.subtitle
    course.description = req.body.description
    course.image = req.body.image
    course.upcoming = req.body.upcoming
    course.save(function (err, course) {
      if (err) { return next(err) }
      res.json(course)
    })
  })
}

exports.createFeature = function (req, res, next) {
  Course.findOne({slug: req.params.slug})
  .exec(function (err, course) {
    if (err) { return next(err) }
    var feature = {
      title: req.body.title,
      icon: req.body.icon,
      description: req.body.description
    }
    course.features.push(feature)
    course.save(function (err) {
      if (err) { return next(err) }
      res.json(feature)
    })
  })
}

exports.deleteFeature = function (req, res, next) {
  Course.findOne({slug: req.params.slug})
  .exec(function (err, course) {
    if (err) { return next(err) }
    course.features.id(req.params.id).remove()
    course.save(function (err) {
      if (err) { return next(err) }
      res.send(200)
    })
  })
}
