import React from 'react';
import logo from '../airbnb.png'
import '../App.css';

function Header() {
  return <div>
      <nav className='navbar-section'>
          <img src={logo} alt="airbnb" />
      </nav>
  </div>;
}

export default Header;
