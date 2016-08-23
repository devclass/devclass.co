const gulp = require('gulp')
const less = require('gulp-less')
const uglifycss = require('gulp-uglifycss');

module.exports = function (browserSync) {
  // Less task to compile the less files and add the banner
  gulp.task('less:build', function () {
    return gulp.src('less/app.less')
      .pipe(less())
      .pipe(gulp.dest('public'))
      .pipe(browserSync.reload({
        stream: true
      }))
  })

  gulp.task('less:watch', ['less:build'], function () {
    gulp.watch('less/**/*.less', ['less:build']);
  })

  gulp.task('less:minify', function () {
    return gulp.src('less/app.less')
      .pipe(less())
      .pipe(gulp.dest('public'))
  });
}
