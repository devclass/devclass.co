// Configure the browserSync task

const gulp = require('gulp')
const modRewrite  = require('connect-modrewrite');

module.exports = (browserSync) => {
  gulp.task('browserSync', () => {
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
