import React from 'react';
import '../App.css';

function Hero() {
  return <div className='hero'>
      <div>
          <div className='image-group'>
              <img src='../images/Group 77.png' alt="group-image" className='group-images'/>
          </div>
          <div className='text-group'>
              <h2 className="hero-title">Online Experience</h2>
              <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
          </div>
      </div>
  </div>;
}

export default Hero;
