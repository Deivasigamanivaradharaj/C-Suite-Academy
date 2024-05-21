import React,{useEffect} from 'react'

//style.css imported
import './landingpage.css'

//react-router-dom
import { PiStudent } from "react-icons/pi";

//imported in header components
import Header from '../Header/Header';

//Aos animations
import Aos from "aos"
import 'aos/dist/aos.css'

const Landingpage = () => {
  
  //aos fatch 
  useEffect(()=>{
     Aos.init();
  },[])

  return (
    <>
      <div className="landing-page" id='home'>
        <Header/>
        <section className="hero-section">
          <div className="container">
            <p className='text-learn'><PiStudent size='2rem' />Learn more</p>
            <p className='text-grow'>Grow your skills,</p>
            <p className='text-build'>Build your future</p>
            <p className='text-course-development'>Streamlining course development and delivery</p>
            <button type="button" className="button-unlock" data-aos="fade-up"
            data-aos-duration="3000">Unlock Your Potential</button>
          </div>
        </section>
      </div>  
    </>
  )
}

export default Landingpage