import React from 'react';
import image1 from '../images/Group 77.png'
import '../App.css'

function Hero() {
  return <div className='hero'>
      <div>
          <div className='image-group'>
              <img src={image1} alt="group-image" className='group-image'/>
          </div>
          <div className='text-group'>
              <h2 className="hero-title">Online Experience</h2>
              <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
          </div>
      </div>
  </div>;
}

export default Hero;
