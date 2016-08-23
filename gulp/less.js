const gulp = require('gulp')
const less = require('gulp-less')
const uglifycss = require('gulp-uglifycss');

module.exports = (browserSync) => {
  // Less task to compile the less files and add the banner
  gulp.task('less:build', () => {
    return gulp.src('less/app.less')
      .pipe(less())
      .pipe(gulp.dest('public'))
  })

  gulp.task('less:watch', () => {
    gulp.watch('less/**/*.less', ['less:build', browserSync.reload]);
  })

  gulp.task('less:minify', () => {
    return gulp.src('less/app.less')
      .pipe(less())
      .pipe(gulp.dest('public'))
  });
}
