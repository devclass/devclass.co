'use strict';
var fs   = require('fs')
var gulp = require('gulp')

fs.readdirSync(__dirname + '/gulp').forEach(function (module) {
  require('./gulp/' + module)
})

gulp.task('default', ['server', 'css:watch'])
gulp.task('build', ['css'])
