import React from 'react';
import './Card.scss';

const Card = ({ name, address, img }) => {
  console.log(img)
    return ( 
      <div className='card-div'>
        <img src={img} alt='shelter' className='shelter-photo'/>
        <h3>Organization: {name}</h3>
        <h3>Address: {address}</h3>
      </div>
    );
  }

// const mapStateToProps = state = {

// }

export default Card;