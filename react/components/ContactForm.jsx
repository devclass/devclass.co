'use strict'

import React, { Component } from 'react'

class Results extends Component {
  componentDidUpdate () {
    console.log('update')
  }
  componentDidMount () {
    let $DOM = $(this.DOM)
    let $form = $(this.props.form)

    // Wait for previous animation to finish
    $form.promise().done(function () {
      $DOM.fadeIn(1000)
    })
  }
  render () {
    let message = this.props.result ? <div>Something went wrong trying to submit the form. Sorry :/</div> : <div>Thanks! We'll contact you shortly.</div>
    return <div className="results">
      <div ref={(c) => this.DOM = c} className={'results-alert alert alert-' + (this.props.result ? 'danger' : 'success')}>
        {message}
      </div>
    </div>
  }
}

class ContactForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showResult: false,
      result: ''
    }
  }
  onSubmit (e) {
    e.preventDefault()
    let $form = this.refs.form
    let name = $form.name.value
    let email = $form.email.value

    $($form).fadeOut(500)

    $.post('/contact', { name: name, email: email }, (data) => {
      let result = ''

      if (data.errors) {
        result = data.errors
      } else {
        $('input', $form).prop('disabled', true)
      }

      this.setState({
        showResult: true,
        result: result,
        form: $form
      })
    })
  }
  render () {
    return <div className="contact-form">
      {this.state.showResult ? <Results result={this.state.result} form={this.state.form} /> : null}
      <form ref='form' onSubmit={this.onSubmit.bind(this)}>
        {this.props.children}
      </form>
    </div>
  }
}

module.exports = ContactForm
