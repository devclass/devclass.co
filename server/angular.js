exports.main = function (req, res) {
  res.render(__dirname + '/../main.html.ejs')
}

exports.admin = function (req, res) {
  res.render(__dirname + '/../admin.html.ejs')
}
