import React from 'react';
import './Results.scss';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import VeryGoodBoy from '../../images/verygoodboy.PNG';

const Results = ({ animals }) => {
  console.log(animals)
  let cards, photos;
  if (animals.length > 1) {
    cards = animals.map(animal => {
      if (animal.photos.length < 1) {
        photos=VeryGoodBoy
      } else {
        photos= animal.photos[0].medium
      }
      return (<Card
        name={animal.name}
        img={photos}
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