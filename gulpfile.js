'use strict'

const fs = require('fs')
const gulp = require('gulp')
const path = require('path')
const browserSync = require('browser-sync').create()
const modRewrite  = require('connect-modrewrite');

fs.readdirSync(path.join(__dirname, 'gulp'))
  .filter(f => f.endsWith('.js'))
  .forEach(module => require('./gulp/' + module)(browserSync))

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'public',
      middleware: [
        modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    },
  })
})

gulp.task('default', ['dev'])
gulp.task('dev', ['browserSync', 'less:watch', 'react:watch'], function () {
  gulp.watch('**/*.html', browserSync.reload)
  gulp.watch('js/**/*.js', browserSync.reload)
})
gulp.task('build', ['less:build', 'react:build', 'minify'])
gulp.task('minify', ['react:minify', 'less:minify'])
