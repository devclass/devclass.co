'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const {Router, Route, IndexRoute, browserHistory, applyRouterMiddleware} = require('react-router')
const {useScroll} = require('react-router-scroll')

// Main routes
const Home = require('./Home')
const NoMatch = require('./NoMatch')

// Utility components
const MyLink = require('./components/MyLink')
global.COURSES = require('../courses.json')

class App extends React.Component {
  componentDidMount () {
    (function($) {
      // Highlight the top nav as scrolling occurs
      $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
      });

      // Closes the Responsive Menu on Menu Item Click
      $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
      });

      // Offset for Main Navigation
      $('#mainNav').affix({
        offset: {
          top: 100
        }
      })
    })(jQuery)
  }
  render () {
    return <div>
      <nav id='mainNav' className='navbar navbar-default navbar-custom navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header page-scroll'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
              <span className='sr-only'>Toggle navigation</span> Menu <i className='fa fa-bars'></i>
            </button>
            <MyLink className='navbar-brand page-scroll' to='/' hash='#'><img src='/images/logo.png' /> devClass</MyLink>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              <li className='hidden'>
                <a to='/' href='#page-top'></a>
              </li>
              <li>
                <MyLink className='page-scroll' to='/' hash='#courses'>Courses</MyLink>
              </li>
              <li>
                <MyLink className='page-scroll' to='/' hash='#team'>Instructors</MyLink>
              </li>
              <li>
                <MyLink className='page-scroll inquire' to='/' hash='#contact'>Inquire Now</MyLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {this.props.children}
    </div>
  }
}

function shouldUpdateScroll (props) {
  if (props && this._getCurrentLocation().pathname === props.location.pathname) {
    return false
  }

  return true
}

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      require('./courses'),
      { path: '*', component: NoMatch }
    ]
  } ]
}

ReactDOM.render((
  <Router
    history={browserHistory} render={applyRouterMiddleware(useScroll(shouldUpdateScroll))}
    routes={rootRoute}
  />
), document.getElementById('app'))
