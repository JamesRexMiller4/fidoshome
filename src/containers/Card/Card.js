import React from 'react';
import './Card.scss';

const Card = ({ name, address, img, age }) => {
    return ( 
      <div className='card-div'>
        <img src={img} alt='shelter' className='shelter-photo'/>
        <div className='div-details-body'>
          <div className='div-details'>
            <h3 className='pet-name-h3'>{name}</h3>
            <div className='pet-card-details-wrapper'>
            <h3 className='pet-age-h3'>{age}</h3>
            <h3 className='pet-location-h3'>Location: {address}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Card;