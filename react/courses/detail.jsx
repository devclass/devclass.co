'use strict'

const React = require('react')
let courses = require('../../courses.json')

class CourseDetail extends React.Component {
  render() {
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
    return <div>
      <header className='course'>
        <div className='container'>
          <i className={course.icon}></i>
          <h1>{course.title}</h1>
          <h2>{course.subtitle}</h2>
        </div>
      </header>
      <section className='description'>
        {course.description}
      </section>
      <section className='features'>
        <div className='container'>
          <div className='row'>
            {features}
          </div>
        </div>
      </section>
      <section>
        derp
      </section>
    </div>
  }
}

module.exports = CourseDetail

