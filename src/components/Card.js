import React from 'react';
import '../App.css';

function Card(props) {
  
  let badgeText;

  if (props.item.openSpots === 0){
    badgeText = "SOLD OUT"

  }else if (props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  

  return <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText} </div>}
      <img src={props.item.coverImg} className='card-image' alt=''/>
      <div className='card-stats'>
            <img src='../images/Star 1.png' alt="star" className='card-star' />
            <span>{props.item.stats.rating}</span>
            <span className='grey'>({props.item.stats.reviewCount}) * </span>
            <span className='grey'>{props.item.country} </span>
      </div>
      <p className='card-title'>{props.item.title}</p>
      <p> <b>From ${props.item.price}</b>/ person</p>
  </div>;
}

export default Card;
