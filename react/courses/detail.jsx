'use strict'

const React = require('react')
let courses = require('../../courses.json')

class CourseDetail extends React.Component {
  render() {
    let course = courses.find(c => c.slug === this.props.params.course)
    return <div className='course-detail'>
      <header className='course'>
        <div className='container'>
          <div className='intro-text'>
            <div className='container'>
              <i className={course.icon}></i>
              <h1 className='intro-heading'>{course.title} Development</h1>
              <h2 className='intro-lead-in'>{course.subtitle}</h2>
            </div>
          </div>
        </div>
      </header>
      <section className='description'>
        <div className='container'>
          <h2>Learn Cutting Edge {course.title} Development</h2>
          {course.description.map(paragraph => {
            return <p>{paragraph}</p>
          })}
        </div>
      </section>
      <section className='features bg-light-gray'>
        <div className='container'>
          <div className='row feature-row'>
            {course.features.map(feature => {
              return <div key={feature.title} className='col-sm-4'>
                <i className={'fa ' + feature.icon}></i>
                <h3>{feature.title}</h3>
                <div className='description'>
                  {feature.description}
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h2>Coming soon</h2>
        </div>
      </section>
    </div>
  }
}

module.exports = CourseDetail

