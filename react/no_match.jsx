'use strict'

const React = require('react')

class NoMatch extends React.Component {
  render () {
    return <header>
        <div className='container'>
          <div className='intro-text'>
            <div className='container text-center'>
              <h1 className='intro-heading'>404: Not Found</h1>
              <h3 className='text-center'>Typo perhaps?</h3>
            </div>
          </div>
        </div>
    </header>
  }
}

module.exports = NoMatch
