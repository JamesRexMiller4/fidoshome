import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { name, address, img } = this.props
    return ( 
      <div>
        <img src={img} alt='shelter' className='shelter-photo'/>
        <h3>Organization: {name}</h3>
        <h3>Address: {address}</h3>
      </div>
    );
  }
}

export default Card;