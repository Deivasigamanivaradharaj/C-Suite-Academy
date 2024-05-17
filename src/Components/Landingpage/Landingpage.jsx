import React from 'react';

//style.css imported
import './landingpage.css'

//react-router-dom

import { PiStudent } from "react-icons/pi";
import Header from '../Header/Header';
const Landingpage = () => {
  
  return (
    <>
      <div className="landing-page" id='home'>
        <Header></Header>
        
        <section className="hero-section">
          <div className="container">
            <p className='text-learn'><PiStudent size='2rem' />Learn more</p>
            <p className='text-grow'>Grow your skills,</p>
            <p className='text-build'>Build your future</p>
            <p className='text-course-development'>Streamlining course development and delivery</p>
            <button type="button" className="button-unlock">Unlock Your Potential</button>
          </div>
        </section>
      </div>  
    </>
  )
}

export default Landingpage