var router = require('express').Router()
var courses = require('./courses')

router.use(require('./auth'))

router.route('/courses')
  .get(courses.list)
  .post(courses.create)

router.route('/courses/:slug')
  .get(courses.get)
  .put(courses.update)

router.route('/courses/:slug/features')
  .post(courses.createFeature)

module.exports = router
