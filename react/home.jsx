'use strict'

const React = require('react')
const MyLink = require('./myLink')
const ContactForm = require('./contact')

let courses = require('../courses.json')

class Home extends React.Component {
  componentDidMount () {
    // Animation scrolls anchor into view
    if (window.location.hash) {
      (function ($) {
        $('html, body').animate({
          scrollTop: 1
        }, 1, 'easeInOutExpo', function () {
          $(this).animate({
            scrollTop: ($(window.location.hash).offset().top - 50)
          }, 1250, 'easeInOutExpo')
        })
      })(jQuery)
    }
  }
  render() {
    let coursesHTML = courses.map(course => {
      return <div key={course.slug} className='col-xs-12 col-sm-6 courses-item'>
        <MyLink to={'/courses/' + course.slug} className='courses-link'>
          <div className='courses-hover'>
            <div className='courses-hover-content'>
              <i className='fa fa-code fa-3x'></i>
            </div>
          </div>
          <img src={course.image} className='img-responsive' alt=''/>
        </MyLink>
        <div className='courses-caption'>
          <h3>{course.title} Development</h3>
          <p className='text-muted'>{course.subtitle}</p>
        </div>
      </div>
    })
    return <div>
      <header>
        <div className='container'>
          <div className='intro-text'>
            <div className='container'>
              <div className='intro-heading'>Develop a new future</div>
              <div className='intro-lead-in'>Explore courses for intermediate+ programmers wanting to break into web development. Learn the latest in web technologies.</div>
              <MyLink to='/' hash='#courses' className='page-scroll btn btn-xl'>View Courses</MyLink>

            </div>
          </div>
        </div>
      </header>
      <section id='services'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-4'>
                    <span className='fa-stack fa-4x'>
                        <i className='fa fa-circle fa-stack-2x text-primary'></i>
                        <i className='fa fa-code fa-stack-1x fa-inverse'></i>
                    </span>
              <h4 className='service-heading'>Code That Matters</h4>
              <p className='text-muted'>Latest industry trends. Nothing obsolete. We teach the latest and greatest versions of React and Node.js.</p>
            </div>
            <div className='col-md-4'>
                    <span className='fa-stack fa-4x'>
                        <i className='fa fa-circle fa-stack-2x text-primary'></i>
                        <i className='fa fa-laptop fa-stack-1x fa-inverse'></i>
                    </span>
              <h4 className='service-heading'>Stay On Track</h4>
              <p className='text-muted'>Classroom setting helps you focus on what’s important. Easy access to instructors, as well as learning alongside other motivated
                programmers.</p>
            </div>
            <div className='col-md-4'>
                    <span className='fa-stack fa-4x'>
                        <i className='fa fa-circle fa-stack-2x text-primary'></i>
                        <i className='fa fa-lock fa-stack-1x fa-inverse'></i>
                    </span>
              <h4 className='service-heading'>Experienced Instructors</h4>
              <p className='text-muted'>Nearly 30 years of combined experienced. We use the same technology that we teach on a daily basis.</p>
            </div>
          </div>
        </div>
      </section>
      <section id='courses' className='bg-light-gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>Courses</h2>
              <h3 className='section-subheading text-muted'>Learn the latest in frontend and backend web technologies.</h3>
            </div>
          </div>
          <div className='row'>
            {coursesHTML}
          </div>
        </div>
      </section>
      <section id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>Meet Your Instructors</h2>
              <h3 className='section-subheading text-muted'>We're passionate about tech. Nearly 30 years combined experience.</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='team-member'>
                <img src='/images/team/jeff.jpg' className='img-responsive img-circle' alt=''/>
                <h4>Jeff Dickey</h4>
                <p className='text-muted'>Lead Instructor</p>
                <ul className='list-inline social-buttons'>
                  <li><a href='https://github.com/dickeyxxx'><i className='fa fa-github'></i></a>
                  </li>
                  <li><a href='https://twitter.com/dickeyxxx'><i className='fa fa-twitter'></i></a>
                  </li>
                  <li><a href='https://linkedin.com/in/dickeyxxx'><i className='fa fa-linkedin'></i></a>
                  </li>
                  <li><a href='mailto:dickeyxxx@gmail.com'><i className='fa fa-envelope'></i></a>
                  </li>
                </ul>
                <div className='text-justify bio col-xs-12 col-md-10 col-md-offset-1'>
                  <p>
                    Jeff has over 10 years experience in web development. He is currently Lead Member of Technical Staff at Salesforce.com leading the development of the Heroku
                    CLI. Jeff is always on the lookout for the latest technology and tools to enhance his ability to build software.
                  </p>
                  <p>
                    Jeff brings the expertise of quickly ramping up on the latest tools and discovering what is important.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='team-member'>
                <img src='/images/team/rob.jpg' className='img-responsive img-circle' alt=''/>
                <h4>Rob Vella</h4>
                <p className='text-muted'>Instructor</p>
                <ul className='list-inline social-buttons'>
                  <li><a href='https://github.com/deftx'><i className='fa fa-github'></i></a>
                  </li>
                  <li><a href='https://twitter.com/lol_rob_vella'><i className='fa fa-twitter'></i></a>
                  </li>
                  <li><a href='https://linkedin.com/in/robvella'><i className='fa fa-linkedin'></i></a>
                  </li>
                  <li><a href='mailto:me@robvella.com'><i className='fa fa-envelope'></i></a>
                  </li>
                </ul>
                <div className='text-justify bio col-xs-12 col-md-10 col-md-offset-1'>
                  <p>
                    Rob is the Founder of Morpho.io, a web firm based out of Portland, OR. Rob has been tinkering with technology since the age of 5 and formed an IT company at the
                    age of 18. After 10 years of IT, Rob focused full time on web development and discovered his passion for teaching.
                  </p>
                  <p>
                    Rob's vast technology experience brings a breadth of knowledge into the classroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-lg-offset-2 text-center'>
              <p className='large text-muted'></p>
            </div>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 text-center'>
              <h2 className='section-heading'>Contact Us</h2>
              <h3 className='section-subheading text-primary'>Interested in a class? Classes begin November 1st and run for 8 weeks.</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-md-6 col-md-offset-3'>
              <ContactForm id='contactForm'>
                <div className='row'>
                  <div className='col-xs-12'>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Your Name *' id='name' required
                             data-validation-required-message='Please enter your name.'/>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-xs-12'>
                    <div className='form-group'>
                      <input type='email' className='form-control' placeholder='Your Email *' id='email' required
                             data-validation-required-message='Please enter your email address.'/>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='clearfix'></div>
                  <div className='col-xs-12 text-center'>
                    <div id='success'></div>
                    <button type='submit' className='btn btn-xl'>Send Message</button>
                  </div>
                </div>
              </ContactForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

module.exports = Home
