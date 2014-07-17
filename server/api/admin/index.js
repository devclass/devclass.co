var router = require('express').Router()
var courses = require('./courses')
var jwt = require('jwt-simple')
var config = require('../../config')

router.use(function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.send(401)
  }
  req.auth = jwt.decode(req.headers['x-auth'], config.secret)
  if (req.auth.github !== 'dickeyxxx') {
    return res.send(401)
  }
  next()
})

router.route('/courses')
  .get(courses.list)
  .post(courses.create)

router.route('/courses/:slug')
  .get(courses.get)
  .put(courses.update)

router.route('/courses/:slug/features')
  .post(courses.createFeature)

module.exports = router
