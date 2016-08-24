const gulp = require('gulp')
const less = require('gulp-less')
const uglifycss = require('gulp-uglifycss')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

module.exports = (browserSync) => {
  // Less task to compile the less files and add the banner
  gulp.task('less:build', () => {
    return gulp.src('less/app.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public'))
  })

  gulp.task('less:watch', () => {
    gulp.watch('less/**/*.less', ['less:build', browserSync.reload]);
  })

  gulp.task('less:minify', ['less:build'], () => {
    gulp.src('public/app.css')
      .pipe(uglifycss())
      .pipe(gulp.dest('public'))
  });
}
