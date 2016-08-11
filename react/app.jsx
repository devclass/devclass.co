'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const {Router, Route, Link, IndexRoute, browserHistory, applyRouterMiddleware} = require('react-router')
const Home = require('./home')
const CourseDetail = require('./courses/detail')
const {useScroll} = require('react-router-scroll')
const NoMatch = require('./no_match')

class App extends React.Component {
  render () {
    return <div>
      <header>
        <div className='container'>
          <nav>
            <Link className='brand' to='/'>devclass</Link>
          </nav>
        </div>
      </header>
      {this.props.children}
      <div className='class-image full-bleed'></div>
      <footer>
      </footer>
    </div>
  }
}

ReactDOM.render((
  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='courses/:course' component={CourseDetail} />
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
