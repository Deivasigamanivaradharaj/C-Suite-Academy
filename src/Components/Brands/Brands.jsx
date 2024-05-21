import React from 'react'

import './brands.css'

// Import your logos with brabdone ONE
import ADP from './Assets/adp-logo.svg';
import Ataccama from './Assets/ataccama-logo.svg';
import Bastion from './Assets/bastion-zero-logo.png';
import Cariad from './Assets/cariad-logo.svg';
import CoxAutomotive from './Assets/cox-automotive-logo.svg';
import Confluent from './Assets/confluent-logo.svg';
import Expedia from './Assets/expedia-logo.svg';
import Infosys from './Assets/infosys-logo.svg';
import Ing from './Assets/ing-logo.svg';
import Spotify from './Assets/spotify-logo.png';


// Import your logos with brabdtwo TWO
import pinterest from './Assets/pinterest-badge.svg';
import rakuten   from './Assets/rakuten-logo.svg';
import salt   from './Assets/salt-security-logo.svg';
import warehouse from './Assets/the-warehouse-group-logo.svg';
import trade from './Assets/trade-republic-logo.svg';
import zeiss from  './Assets/zeiss-logo.svg';
import onemain from './Assets/onemain-vertical.svg';
import nytimes from './Assets/nytimes-rectangle-logo.svg';
import player from './Assets/jw-player-logo.svg';
import tabcorp from './Assets/tabcorp-logo.svg'

const data = {
    brandone: [
      { name: 'ADP', src: ADP },
      { name: 'Ataccama', src: Ataccama },
      { name: 'Cariad', src: Cariad },
      { name: 'Confluent', src: Confluent },
      { name: 'Cox Automotive', src: CoxAutomotive },
      { name: 'Expedia', src: Expedia },
      { name: 'Infosys', src: Infosys },
      { name: 'ING', src: Ing },
      { name: 'Bastion Zero', src: Bastion },
      { name: 'Spotify', src: Spotify }

      
    ],
    brandtwo: [
      { name: 'Pinterest', src: pinterest, width:100, height:50 },
      { name: 'Rakuten', src: rakuten },
      { name: 'Salt Security', src: salt },
      { name: 'Trade Republic', src: trade },
      { name: 'The Warehouse Group', src: warehouse },
      { name: 'Zeiss', src:zeiss ,width:100, height:50 },
      { name: 'JW Player', src: player },
      { name: 'New York Times', src: nytimes },
      { name: 'Tabcorp', src: tabcorp },
      { name: 'OneMain', src: onemain }
    ],


    stats: {
      users: '15M+',
      instructors:'10M+',
      courses: '20B+'
    }
  };
const Brands = () => {
    
  return (
   <>
    <div className="lms-info" id='why'>
      <h1 className='why-lms'>Why use LMS?</h1>
      <h3 className='why-para-one'>Preferred by educators worldwide.<br/> Adopted by leading educational institutions.</h3>
      <p className='why-para-two'>LMS offers a comprehensive suite of tools, services, and content, facilitating streamlined course <br/> management and delivery, empowering educators to enhance learning experiences effectively.</p>
     
      <div className="logos-container-one">
        {data.brandone.map((logo, index) => (
          <div key={index} className="logo-item-one">
            <img src={logo.src} alt={logo.name} className="logo-image-one" />
          </div>
        ))}
      </div>

      <div className="logos-container-two">
        {data.brandtwo.map((logo, index) => (
          <div key={index} className="logo-item-two">
            <img src={logo.src} alt={logo.name} className="logo-image-two" style={{ width: logo.width, height: logo.height }}/>
          </div>
        ))}
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <strong>{data.stats.users}</strong>
          <p className='para-tool'>USERS</p>
        </div>
        <div className="stat-item">
          <strong>{data.stats.instructors}</strong>
          <p className='para-tool'>INSTRUCTORS</p>
        </div>
        <div className="stat-item">
          <strong>{data.stats.courses}</strong>
          <p className='para-tool'>COURSES</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default Brands