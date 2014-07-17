var router = require('express').Router()

router.get('/courses', function (req, res, next) {
  res.json(['foobar'])
})

module.exports = router
