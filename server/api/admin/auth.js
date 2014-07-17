var jwt = require('jwt-simple')
var config = require('../../config')

module.exports = function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.send(401)
  }
  req.auth = jwt.decode(req.headers['x-auth'], config.secret)
  if (req.auth.github !== 'dickeyxxx') {
    return res.send(401)
  }
  next()
}
