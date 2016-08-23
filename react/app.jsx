'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const {Router, Route, Link, IndexRoute, browserHistory, applyRouterMiddleware} = require('react-router')
const Home = require('./home')
const CourseDetail = require('./courses/detail')
const {useScroll} = require('react-router-scroll')
const NoMatch = require('./no_match')

class App extends React.Component {
  jquery () {
    (function($) {
      // jQuery for page scrolling feature - requires jQuery Easing plugin
      $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
      });

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
      {this.props.children}
      {this.jquery()}
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
