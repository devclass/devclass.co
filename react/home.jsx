'use strict'

const React = require('react')
const {Link} = require('react-router')

let courses = require('../courses.json')

class Home extends React.Component {
  render () {
    let coursesHTML = courses.map(course => {
      return <div key={course.slug} className='text-center course col-md-6'>
        <i className={course.icon}></i>
        <h3>{course.title}</h3>
        <h4>{course.subtitle}</h4>
        <Link to={'/courses/' + course.slug} className='btn'>Learn more...</Link>
      </div>
    })
    return <div className='landing'>
      <div className='hero'>
        <div className='container'>
          <i className='fa fa-university'></i>
          <h1>devclass</h1>
          <p>Fast-paced, in-class web and mobile courses.</p>
          <p>Taught in Portland.</p>
        </div>
      </div>
      <div className='features container'>
        <div className='row'>
          <div className='item col-sm-4'>
            <i className='fa fa-code'></i>
            <h2>Code that Matters</h2>
            <p>Latest industry trends. Nothing obsolete.</p>
          </div>
          <div className='item col-sm-4'>
            <i className='fa fa-road'></i>
            <h2>Stay on Track</h2>
            <p>Classroom setting helps you focus on what&rsquo;s important. No more banging your head.</p>
          </div>
          <div className='item col-sm-4'>
            <i className='fa fa-book'></i>
            <h2>Experienced Instructors</h2>
            <p>The instructors are working professionals using the same tech at their jobs.</p>
          </div>
        </div>
      </div>
      <div className='table-image full-bleed'></div>
      <div id='courses' className='courses'>
        <div className='container'>
          <h2>Upcoming Courses</h2>
          <div className='row'>
            {coursesHTML}
          </div>
        </div>
      </div>
      <div id='instructors' className='instructors'>
        <div className='container'>
          <h2>Meet your Instructors</h2>
          <div className='instructor col-sm-6'>
            <img className='img-circle' src='/images/jeff.png' />
            <h3>Jeff Dickey</h3>
            <div className='text-justify bio'>
              <p>
                Jeff has over 10 years experience in web development.
                He is currently Lead Member of Technical Staff at Salesforce.com leading the development of the Heroku CLI.
                Jeff is always on the lookout for the latest technology and tools to enhance his ability to build software.
              </p>
              <p>
                Jeff brings the expertise of quickly ramping up on the latest tools and discovering what is important.
              </p>
            </div>
            <a className='social' title='github' target='_blank' href='https://github.com/dickeyxxx'><i className='fa fa-github'></i></a>
            <a className='social' title='twitter' target='_blank' href='https://twitter.com/dickeyxxx'><i className='fa fa-twitter'></i></a>
            <a className='social' title='linkedin' target='_blank' href='https://linkedin.com/in/dickeyxxx'><i className='fa fa-linkedin'></i></a>
            <a className='social' title='email' target='_blank' href='mailto:dickeyxxx@gmail.com'><i className='fa fa-envelope'></i></a>
          </div>
          <div className='instructor col-sm-6'>
            <img className='img-circle' src='/images/rob.jpg' />
            <h3>Rob Vella</h3>
            <div className='text-justify bio'>
              <p>
                Rob is the Founder of Morpho.io, a web firm based out of Portland, OR. Rob has been tinkering with technology since the age of 5 and formed an IT company at the age of 18. After 10 years of IT, Rob focused full time on web development and discovered his passion for teaching.
              </p>
              <p>
                Rob's vast technology experience brings a breadth of knowledge into the classroom.
              </p>
            </div>
            <a className='social' title='github' target='_blank' href='https://github.com/deftx'><i className='fa fa-github'></i></a>
            <a className='social' title='twitter' target='_blank' href='https://twitter.com/lol_rob_vella'><i className='fa fa-twitter'></i></a>
            <a className='social' title='linkedin' target='_blank' href='https://linkedin.com/in/robvella'><i className='fa fa-linkedin'></i></a>
            <a className='social' title='email' target='_blank' href='mailto:me@robvella.com'><i className='fa fa-envelope'></i></a>
          </div>
        </div>
      </div>
    </div>
  }
}

module.exports = Home
