import React from 'react'

import './success.css'

import inner from './Assets/inner.png'
function Success() {
  return (
    <>
      
      <div className='container-fluid' id='success'>
        <div className='row'>
          <div className='col-md-7 center-all'>
            <div className='content-head '>
              <h2>Your Success Matters</h2>
              <p>Our learning technology is designed to propel you beyond your goals effortlessly. 
                From our user experience design to our unwavering support, the Absorb team handles the heavy lifting,
                allowing your learners to excel, your administrators to relax, and your business to outperform the competition.
                We excel at simplifying the complex, but we'll keep that just between us.
                Experience it firsthand and see for yourself.</p>
            </div>
          </div>
          <div className='col-md-5' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className='outer-image'>
              <img src={inner} className='inner-image'/>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Success