var _       = require('lodash');
var morgan  = require('morgan');
var express = require('express');
var courses = require('./courses.json');
var app = express();

app.set('view engine', 'ejs');
app.set('layout', 'layout.html.ejs');

app.use(morgan('dev'));
app.use(require('express-ejs-layouts'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home.html.ejs', {courses: courses});
});

app.get('/courses/:slug', function (req, res) {
  var course = _.find(courses, {slug: req.params.slug});
  res.render('course.html.ejs', {course: course});
});

var server = app.listen(3000, function () {
  console.log('listening on', server.address().port);
});
