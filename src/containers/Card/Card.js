import React from 'react';
import './Card.scss';

const Card = ({ name, address, img }) => {
    return ( 
      <div className='card-div'>
        <img src={img} alt='shelter' className='shelter-photo'/>
        <div className='div-details-body'>
          <div className='div-details'>
            <h3 className='pet-name-h3'>{name}</h3>
            <h3>Location: {address}</h3>
          </div>
        </div>
      </div>
    );
  }

export default Card;