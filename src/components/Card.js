import React from 'react';
import '../App.css';

function Card(props) {
  
  let badgeText;

  if (props.openSpots === 0){
    badgeText = "SOLD OUT"

  }else if (props.location === "Online"){
    badgeText = "ONLINE"
  }
  

  return <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText} </div>}
      <img src={props.coverImg} className='card-image' alt=''/>
      <div className='card-stats'>
            <img src='../images/Star 1.png' alt="star" className='card-star' />
            <span>{props.stats.rating}</span>
            <span className='grey'>({props.stats.reviewCount}) * </span>
            <span className='grey'>{props.country} </span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p> <b>From ${props.price}</b>/ person</p>
  </div>;
}

export default Card;
