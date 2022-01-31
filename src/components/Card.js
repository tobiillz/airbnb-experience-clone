import React from 'react';
import '../App.css';
import star from '../images/Star 1.png'

function Card() {
  return <div className='card'>
      <div className='card-template'>
         <button className='btn'>
           SOLD OUT
         </button>
      </div>
      <div className='card-stats'>
            <img src={star} alt="star" className='card-star' />
            <span>5</span>
            <span className='grey'>(6) *</span>
            <span className='grey'>USA </span>
      </div>
      <p>Life Lesson from Katie Zafereys</p>
      <p> <b>From $136</b>/ person</p>
  </div>;
}

export default Card;
