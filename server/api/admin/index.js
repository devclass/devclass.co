var router = require('express').Router()
var courses = require('./courses')

router.use(require('./auth'))

router.route('/courses')
  .get(courses.list)
  .post(courses.create)

router.route('/courses/:slug')
  .get(courses.get)
  .put(courses.update)

router.post('/courses/:slug/features', courses.createFeature)
router.delete('/courses/:slug/features/:id', courses.deleteFeature)

module.exports = router
