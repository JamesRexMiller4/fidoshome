import React from 'react';
import './Results.scss';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { addAnimals } from '../../actions/index';
import NoPhoto from '../../images/No_picture_available.png';

const Results = ({ animals }) => {
  console.log(animals)
  let cards, photos;
  if (animals.length > 1) {
    cards = animals.map((animal, index) => {
      if (animal.photos.length < 1) {
        photos=NoPhoto
      } else {
        photos= animal.photos[0].medium
      }
      return (<Card
        key={index + 1}
        id={animal.id}
        age={animal.age}
        name={animal.name}
        img={photos}
        address={animal.contact.address.city}
      />)
    })
    let button = (<button type='button' className='results-btn'>More Results
    <span aria-label='dog-emoji' role='img'>🐶</span></button>)
    cards.push(button)
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

const mapDispatchToProps = dispatch => ({
  addAnimals: animals => dispatch(addAnimals(animals))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);