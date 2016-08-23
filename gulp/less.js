const gulp = require('gulp')
const less = require('gulp-less')
const uglifycss = require('gulp-uglifycss');

module.exports = function (browserSync) {
  // Less task to compile the less files and add the banner
  gulp.task('less:build', function () {
    return gulp.src('less/app.less')
      .pipe(less())
      .pipe(gulp.dest('public'))
  })

  gulp.task('less:watch', function () {
    gulp.watch('less/**/*.less', ['less:build', browserSync.reload]);
  })

  gulp.task('less:minify', function () {
    return gulp.src('less/app.less')
      .pipe(less())
      .pipe(gulp.dest('public'))
  });
}
