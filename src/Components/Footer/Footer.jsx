import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faXTwitter } from '@fortawesome/free-brands-svg-icons' 

function Footer() {
  return (
    <div className='footer' id='footer'>
      <section className='section1'>
        <img src={"logo3.png"} alt="" width={"200px"}/>
        <p>Practical-based learning platform to enhance skills</p>
        <h6>Follow Us on</h6>
        <div className='sociallinks'>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faXTwitter} />
        </div>
      </section>
      <section className='section2'>
        <h5>About LMS</h5>
        <a>Pricing</a>
        <a>Features</a>
        <a>Integrations</a>
        <a>Events</a>
        <a>Reviews</a>
      </section>
      <section className='section3'>
      <h5>Support</h5>
        <a>Contact Us</a>
        <a>Help Desk</a>
        <a>Customer Support</a>
        <a>Professional Services</a>
      </section>
      <section className='section4'>
        <h4>Become an Instructor</h4>
        <p>We only work with the best companies around the globe</p>
        <form className='instructoremail'>
          <input className="emailinput" type="email" placeholder='Enter Your Email'/>
          <input className='registernow' type="submit" value="Register Now" />
        </form>
      </section>
    </div>
  )
}

export default Footer