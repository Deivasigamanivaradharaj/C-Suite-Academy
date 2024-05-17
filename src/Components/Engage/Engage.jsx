import React from 'react'

import './engage.css'

import { FaArrowRight } from "react-icons/fa6";

const Engage = () => {
  return (
    <>
     <div className='engage-head'>
        <h2>Engage</h2>
        <h3>Join the educational community</h3>
        <p className='engage-para'>Participate in regional workshops or connect virtually through our<br/> dedicated forums and chat platforms.
         Our LMS experts provide <br/>valuable insights and support to enhance your teaching experience<br/> and professional development.</p>
        <h4 style={{cursor:'pointer'}}>Connect with us <FaArrowRight  size='1.2rem'/></h4>
        <p className='engage-para-two'>Join our open source initiative</p>
        <p className='our-lms-supporet'>Our LMS-Supported Open Source program welcomes <br/>developers contributing to non-commercial projects in the <br/> education sector.</p>
        <h4  style={{cursor:'pointer'}}>Apply Now <FaArrowRight size='1.2rem'/></h4>
     </div>
    </>
  )
}

export default Engage