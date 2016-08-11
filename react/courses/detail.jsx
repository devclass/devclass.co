'use strict'

const React = require('react')

let courses = require('../../courses.json')

class CourseDetail extends React.Component {
  render () {
    let course = courses.find(c => c.slug === this.props.params.course)
    let features = course.features.map(feature => {
      return <div key={feature.title} className='col-sm-4'>
        <i className={'fa ' + feature.icon}></i>
        <h3>{feature.title}</h3>
        <div className='description'>
          {feature.description}
        </div>
      </div>
    })
    return <div className='course'>
      <div className='hero'>
        <div className='container'>
          <img src={course.image} />
          <h1>{course.title}</h1>
          <h2>{course.subtitle}</h2>
          <div className='description'>{course.description}</div>
        </div>
      </div>
      <div className='features'>
        <div className='container'>
          <div className='row'>
            {features}
          </div>
        </div>
      </div>
      <div className='full-bleed road-image'></div>
      <div className='structure'>
        <h2>Coming Soon</h2>
      </div>
    </div>
  }
}

module.exports = CourseDetail

