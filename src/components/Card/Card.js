import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ name, address, img, age, id }) => {
  return (
    <Link to={`home/${id}`} className='link'>
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
    </Link>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  img: PropTypes.string,
  age: PropTypes.string,
  id: PropTypes.number
}

export default Card;