import React, { Component } from 'react'

class CourseDetail extends Component {
  render() {
    let course = COURSES.find(c => c.slug === this.props.children.props.route.path)
    return <div className='course-detail'>
      <header className='course'>
        <div className='container'>
          <div className='intro-text'>
            <div className='container'>
              <i className={'dev icon-' + course.icon}></i>
              <h1 className='intro-heading'>{course.title} Development</h1>
              <h2 className='intro-lead-in'>{course.subtitle}</h2>
            </div>
          </div>
        </div>
      </header>
      <section className='description'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h2>Learn Cutting Edge {course.title} Development</h2>
              {course.description.map(paragraph => {
                return <p>{paragraph}</p>
              })}
            </div>
            <div className='col-md-3 col-md-offset-1 summary'>
              <h3>Course Summary</h3>
              <div className='row'>
                <div className='col-md-2 icon'><i className='fa fa-clock-o'></i></div>
                <div className='col-md-10'>9 Weeks</div>
              </div>
              <div className='row'>
                <div className='col-md-2 icon'><i className='fa fa-repeat'></i></div>
                <div className='col-md-10'>2 Classes Per Week</div>
              </div>
              <div className='row'>
                <div className='col-md-2 icon'><i className='fa fa-money'></i></div>
                <div className='col-md-10'>Cost: $1500</div>
              </div>
              <div className='row'>
                <div className='col-md-2 icon'><i className='fa fa-calendar'></i></div>
                <div className='col-md-10'>Nov 1 - Dec 22 2016</div>
              </div>
            </div>
          </div>
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
      {this.props.children}
      <section className='curriculum'>
        <div className='container'>
          <h2>Curriculum</h2>
          <div className='weeks'>
            <div className='row'>
              <div className='col-md-3 week'>Week 1 & 2</div>
              <div className='col-md-9'>Intro to Node.js, Express, Databases</div>
            </div>
            <div className='row'>
              <div className='col-md-3 week'>Week 3 & 4</div>
              <div className='col-md-9'>Promises, ES6 and ES7</div>
            </div>
            <div className='row'>
              <div className='col-md-3 week'>Week 5 & 6</div>
              <div className='col-md-9'>Intro to React &amp; Security</div>
            </div>
            <div className='row'>
              <div className='col-md-3 week'>Week 6 & 7</div>
              <div className='col-md-9'>Web Sockets & Redis</div>
            </div>
            <div className='row'>
              <div className='col-md-3 week'>Week 8 & 9</div>
              <div className='col-md-9'>Final Projects &amp; Help</div>
            </div>
         </div>
        </div>
      </section>
    </div>
  }
}

module.exports = CourseDetail
