'use strict';
var gulp       = require('gulp')
var concat     = require('gulp-concat')
var uglify     = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var ngAnnotate = require('gulp-ng-annotate')
var templateCache = require('gulp-angular-templatecache')

gulp.task('angular', function () {
  return gulp.src(['angular/**/module.js', 'angular/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})

gulp.task('angular:templates', function () {
  return gulp.src('templates/**/*.html')
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest('assets'))
})

gulp.task('angular:watch', ['angular', 'angular:templates'], function () {
  gulp.watch('angular/**/*.js', ['angular'])
  gulp.watch('templates/**/*.html', ['angular:templates'])
})
