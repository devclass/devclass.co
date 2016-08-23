'use strict'

const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = (browserSync) => {
  gulp.task('imagemin', () =>
    gulp.src('public/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('public/images'))
  );
}
