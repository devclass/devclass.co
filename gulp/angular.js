'use strict';
var gulp       = require('gulp')
var concat     = require('gulp-concat')
var uglify     = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var ngAnnotate = require('gulp-ng-annotate')
var templateCache = require('gulp-angular-templatecache')

gulp.task('angular:main', function () {
  return gulp.src(['angular/main/module.js', 'angular/main/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/main'))
})

gulp.task('angular:admin', function () {
  return gulp.src(['angular/admin/module.js', 'angular/admin/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/admin'))
})

gulp.task('angular:main:templates', function () {
  return gulp.src('templates/main/**/*.html')
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest('assets/main'))
})

gulp.task('angular:admin:templates', function () {
  return gulp.src('templates/admin/**/*.html')
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest('assets/admin'))
})

gulp.task('angular:watch', ['angular'], function () {
  gulp.watch('angular/main/**/*.js', ['angular:main'])
  gulp.watch('angular/admin/**/*.js', ['angular:admin'])
  gulp.watch('templates/main/**/*.html', ['angular:main:templates'])
  gulp.watch('templates/admin/**/*.html', ['angular:admin:templates'])
})

gulp.task('angular', ['angular:main', 'angular:admin', 'angular:templates'])
gulp.task('angular:templates', ['angular:main:templates', 'angular:admin:templates'])
