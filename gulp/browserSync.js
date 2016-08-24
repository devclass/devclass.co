// Configure the browserSync task

const gulp = require('gulp')
const nodemon = require('gulp-nodemon');
const DEV_PORT = 3000
const NODE_PORT = 3001

module.exports = (browserSync) => {
  gulp.task('browserSync', ['nodemon'], () => {
    browserSync.init({
      proxy: 'http://localhost:' + NODE_PORT + '',
      files: ['public/**/*.*'],
      port: DEV_PORT
    })
  })

  gulp.task('nodemon', (cb) => {
    var started = false
    return nodemon({
      script: 'server.js',
      env: {
        'PORT': NODE_PORT
      }
    }).on('start', () => {
      if (!started) {
        cb()
        started = true
      }
    })
  })
}
