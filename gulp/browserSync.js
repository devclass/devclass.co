// Configure the browserSync task

const gulp = require('gulp')
const modRewrite  = require('connect-modrewrite');

module.exports = function (browserSync) {
  gulp.task('browserSync', function () {
    browserSync.init({
      server: {
        baseDir: 'public',
        middleware: [
          modRewrite([
            '!\\.\\w+$ /index.html [L]'
          ])
        ]
      }
    })
  })
}
