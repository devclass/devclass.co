'use strict'

const fs = require('fs')
const gulp = require('gulp')
const path = require('path')
const browserSync = require('browser-sync').create()

fs.readdirSync(path.join(__dirname, 'gulp'))
  .filter(f => f.endsWith('.js'))
  .forEach(module => require('./gulp/' + module)(browserSync))

gulp.task('default', ['dev'])
gulp.task('dev', ['nodemon', 'browserSync', 'less:build', 'less:watch', 'react:watch'], function () {
  gulp.watch('**/*.html', browserSync.reload)
  gulp.watch('public/**/*.js', browserSync.reload)
})

gulp.task('minify', ['react:minify', 'less:minify'])
gulp.task('build', ['less:build', 'react:build', 'minify', 'imagemin'])
