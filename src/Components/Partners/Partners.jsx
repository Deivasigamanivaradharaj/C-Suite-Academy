import React from 'react'
import './Partners.css'

function Partners() {
  return (
    <div className='Partners' id='partners'>
        <div className="curve"></div>
        <div className="parent">
            <div className='subparent'>
                <h2>Empower educators with seamless development from course creation to delivery</h2>
                <p>Forge partnerships that align with your educational goals, ensuring a  smooth transition from course creation to delivery, whether on local  servers or in the cloud.</p>
                <h4>Our trusted partners {"->"}</h4>
                <div className="partnerscontainer">
                    <div className='partneritems'>
                        <div className='img'></div>
                        <p>An online learning marketplace offering a diverse array of  courses across various subjects.</p>
                    </div>
                    <div className='partneritems'>
                        <div className='img'></div>
                        <p>A platform providing professional courses, certifications,  and personalized mentorship to enhance career.</p>
                    </div>
                    <div className='partneritems'>
                        <div className='img'></div>
                        <p>A learning management system facilitating intuitive course  design, interactive content creation.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners