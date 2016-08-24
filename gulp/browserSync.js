// Configure the browserSync task

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

const DEV_PORT = 3000
const NODE_PORT = 3001

module.exports = (browserSync) => {
  gulp.task('nodemon', (cb) => {
    return nodemon({
      script: 'server.js',
      watch: '.',
      ext: 'html js',
      ignore: [
        'gulpfile.js',
        'node_modules/',
        'gulp/**',
        'public'
      ],
      env: {
        'PORT': NODE_PORT
      }
    }).once('start', cb)
      .on('start', () => {
        setTimeout(() => {
          browserSync.reload({
            stream: false
          }, 1500)
        })
      })
  })

  gulp.task('browserSync', ['nodemon'], () => {
    browserSync.init({
      proxy: 'http://localhost:' + NODE_PORT + '',
      port: DEV_PORT,
      ws: true
    })
  })
}
