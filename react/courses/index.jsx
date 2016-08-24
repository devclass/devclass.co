module.exports = {
  path: 'courses',
  getChildRoutes(partialNextState, cb) {
    cb(null, [
      { path: 'learn-node-js', component: require('./components/LearnNodeJs') },
      { path: 'learn-react', component: require('./components/LearnReact') }
    ])
  },
  getComponent(nextState, cb) {
    cb(null, require('./components/CourseDetail'))
  }
}
