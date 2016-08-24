'use strict'

/**
 * Custom link handler for animating scrolling
 *
 * @type {exports|module.exports}
 */
const {Link} = require('react-router')
const React = require('react')

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class MyLink extends React.Component {
  constructor(props) {
    super(props)
  }
  doClick(event) {
    if (this.props.hash) {
      // If hash is on active page, then scroll to it
      // FIXME: I don't know how to do this better
      if (this.context.router.isActive(this.props.to, true) === true) {
        //event.preventDefault()
        let href = this.props.hash

        $('html, body').stop().animate({
          scrollTop: ($(href).offset().top - 50)
        }, 1250, 'easeInOutExpo')
      }
    }
  }
  render() {
    let props = this.props
    return <Link to={props.to} hash={props.hash} className={props.className} onClick={this.doClick.bind(this)}>{props.children}</Link>
  }
}

MyLink.contextTypes = {
  router: React.PropTypes.object
}

module.exports = MyLink
