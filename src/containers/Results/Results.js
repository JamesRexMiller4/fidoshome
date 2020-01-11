import React from 'react';
import './Results.scss';
import Card from '../Card/Card';
import { connect } from 'react-redux';

const Results = ({ animals }) => {
  console.log(animals)
  let cards;
  if (animals.length > 1) {
    cards = animals.map(animal => {
      return (<Card
        name={animal.name}
        img={animal.photos[0].small}
        address={animal.contact.address.city}
      />)
    })
  } else {
    cards = [];
  }

  return ( 
    <section className='results-section'>
      {cards}
    </section>
  );
}

const mapStateToProps = state => ({
  animals: state.animals
})

export default connect(mapStateToProps)(Results);