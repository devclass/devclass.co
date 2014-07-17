var router = require('express').Router()

router.use('/admin', require('./admin'))

router.get('*', function (req, res) {
  res.send(404)
})

module.exports = router
