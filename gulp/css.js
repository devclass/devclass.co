var gulp    = require('gulp')
var stylus  = require('gulp-stylus')
var plumber = require('gulp-plumber')

gulp.task('css:main', function () {
  return gulp.src('css/main.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('assets/main'))
})

gulp.task('css:admin', function () {
  return gulp.src('css/admin.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('assets/admin'))
})

gulp.task('css:watch', ['css'], function () {
  gulp.watch('css/**/*.styl', ['css'])
})

gulp.task('css', ['css:main', 'css:admin'])
