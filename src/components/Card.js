import React from 'react';
import '../App.css';

function Card({coverImg, rating , reviewCount, country, title, price}) {
  
  return <div className='card'>
      <img src={coverImg} className='card-image' alt=''/>
      <button className='btn'>
        SOLD OUT 
      </button> 
      <div className='card-stats'>
            <img src='../images/Star 1.png' alt="star" className='card-star' />
            <span>{rating}</span>
            <span className='grey'>({reviewCount}) * </span>
            <span className='grey'>{country} </span>
      </div>
      <p className='card-title'>{title}</p>
      <p> <b>From ${price}</b>/ person</p>
  </div>;
}

export default Card;
