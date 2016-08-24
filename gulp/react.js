'use strict'

const gulp = require('gulp')
const browserify = require('gulp-browserify')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

module.exports = () => {
  gulp.task('react:build', () => {
    return gulp.src('./react/app.jsx')
      .pipe(browserify({
        transform: ['babelify'],
        extensions: ['.jsx']
      })).on('error', err => console.error(err.stack))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./public'))
  })

  gulp.task('react:watch', ['react:build'], () => {
    gulp.watch(['./react/**/*.jsx', 'courses.json'], ['react:build'])
  })

  gulp.task('react:minify', ['react:build'], () => {
    process.env.NODE_ENV = 'production'
    return gulp.src('public/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('./public'))
  })
}


