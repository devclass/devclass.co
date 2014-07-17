var config = require('./config')
var request = require('request')
var jwt = require('jwt-simple')

function githubHeaders (token) {
  return {
    'User-Agent': 'devclass',
    'Authorization': 'token ' + token
  }
}

exports.redirect = function (req, res) {
  res.redirect('https://github.com/login/oauth/authorize?redirect_uri=' + config.github.redirectUri + '&client_id=' + config.github.clientId)
}

exports.callback = function (req, res, next) {
  request.post({
    url: 'https://github.com/login/oauth/access_token',
    qs: {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code: req.query.code
    },
    json: true,
    headers: githubHeaders()
  }, function (err, _, auth) {
    if (err) { return next(err) }
    request.get({
      url: 'https://api.github.com/user',
      json: true,
      headers: githubHeaders(auth.access_token)
    }, function (err, _, user) {
      var token = jwt.encode({github: user.login}, config.secret)
      res.redirect('/admin#?token=' + token)
    })
  })
}
