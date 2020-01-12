import React, { Component } from 'react';
import './PetPage.scss';
import { connect } from 'react-redux';



class PetPage extends Component {
  render() {
    const { animals, id } = this.props
    const foundPet = animals.find(animal => animal.id === parseInt(id))
    console.log(foundPet)
    return ( 
      <section>
        <img src={foundPet.photos[0].large} alt='pet-profile' className='pet-profile-pic' />
        <h2>{foundPet.name}</h2>
        <h3>{foundPet.description}</h3>
        <ul>Attributes:
          <li>Breed: {foundPet.breeds.primary}</li>
          <li>Color: {foundPet.colors.primary}</li>
          <li>Gender: {foundPet.gender}</li>
        </ul>
        <ul>Other Details:
          <li>Spayed/Neutered: {foundPet.attributes.spayed_neutered}</li>
          <li>House Trained: {foundPet.attributes.spayed_neutered}</li>
          <li>Up-to-Date on Shots: {foundPet.attributes.shots_current}</li>
        </ul>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  animals: state.animals
})
export default connect(mapStateToProps)(PetPage);