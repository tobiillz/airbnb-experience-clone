import React from 'react';
import '../App.css';
import star from '../images/Star 1.png';

function Card({img, rating , number, country, description, price}) {
  let colors = ["red", "green", "blue"]
  return <div className='card'>

          {colors.map((color)=> <h3>{color}</h3>)}
      
      {/* <img src={img} className='card-image' alt=''/>
      {/* <button className='btn'>
        SOLD OUT 
      </button> */}
      <div className='card-stats'>
            <img src={star} alt="star" className='card-star' />
            <span>{rating}</span>
            <span className='grey'>({number}) * </span>
            <span className='grey'>{country} </span>
      </div>
      <p>{description}</p>
      <p> <b>From ${price}</b>/ person</p> */}
  </div>;
}

export default Card;
