'use strict'

const React = require('react')

class Results extends React.Component {
  render () {
    return <div className={'alert alert-' + (this.props.result ? 'danger' : 'success')}>
      {this.props.result ? this.props.result : 'Thanks! We\'ll contact you shortly.'}
    </div>
  }
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      result: ''
    }
  }
  onSubmit(e) {
    e.preventDefault()
    let $this = this
    let name = this.refs.form.name.value
    let email = this.refs.form.email.value

    $.post('/contact', { name: name, email: email }, (data) => {
      let result = ''

      if (data.errors) {
        result = data.errors
      }

      $this.setState({
        showResult: true,
        result: result
      })
    })
  }
  render () {
    return <form ref='form' onSubmit={this.onSubmit.bind(this)}>
      {this.state.showResult ? <Results result={this.state.result} /> : null}
      {this.props.children}
    </form>
  }
}

module.exports = ContactForm
