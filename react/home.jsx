'use strict'

const React = require('react')
const {Link} = require('react-router')

let courses = require('../courses.json')

class Home extends React.Component {
  render () {
    let coursesHTML = courses.map(course => {
      return <div key={course.slug} className='text-center course col-md-6'>
        <img src={course.image} />
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
            <a className='social' title='github' href='https://github.com/dickeyxxx'><i className='fa fa-github'></i></a>
            <a className='social' title='twitter' href='https://twitter.com/dickeyxxx'><i className='fa fa-twitter'></i></a>
            <a className='social' title='linkedin' href='https://linkedin.com/in/dickeyxxx'><i className='fa fa-linkedin'></i></a>
            <a className='social' title='email' href='mailto:dickeyxxx@gmail.com'><i className='fa fa-paper-plane'></i></a>
          </div>
          <div className='instructor col-sm-6'>
            <img className='img-circle' src='/images/greg.jpg' />
            <h3>Greg Buckner</h3>
            <div className='text-justify bio'>
              <p>
                Greg is the Founder &amp; CEO of Let&rsquo;s At. A former product manager, Greg taught himself how to code and found a passion for it.
                He later began teaching with Jeff and discovered a love for teaching as well.
              </p>
              <p>
                In addition to Greg's product experience, Greg brings the experience of learning code later in his career to the classroom.
              </p>
            </div>
            <a className='social' title='twitter' href='https://twitter.com/thebucknerlife'><i className='fa fa-twitter'></i></a>
            <a className='social' title='linkedin' href='https://linkedin.com/in/gbuckner'><i className='fa fa-linkedin'></i></a>
            <a className='social' title='email' href='mailto:gbuckner23@gmail.com'><i className='fa fa-paper-plane'></i></a>
          </div>
        </div>
      </div>
    </div>
  }
}

module.exports = Home
