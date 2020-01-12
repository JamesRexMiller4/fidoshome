import React, { Component } from 'react';
import './PetPage.scss';
import PawLogo from '../../images/favicon-32x32.png';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';



class PetPage extends Component {
  render() {
    const { animals, id } = this.props
    const foundPet = animals.find(animal => animal.id === parseInt(id))
    console.log(foundPet)
    return ( 
      <section>
        {/* <Header /> */}
        <div className='header-wrapper'>
          <h2 className='home-h2'>Fido's Home</h2>
          <img src={PawLogo} alt='paw print' className='paw-logo' />
        </div>
        <section>
        <img src={foundPet.photos[0].medium} alt='pet-profile' className='pet-profile-pic' />
        <h2 className='pet-name-h2'>{foundPet.name}</h2>
        <h3 className='pet-description-h3'>{foundPet.description}</h3>
        <ul className='ul-attributes'>Attributes:
          <li className='li-attribute'>Breed: {foundPet.breeds.primary}</li>
          <li className='li-attribute'>Color: {foundPet.colors.primary}</li>
          <li className='li-attribute'>Gender: {foundPet.gender}</li>
        </ul>
        <ul className='ul-other-details'>Other Details:
          <li className='li-attribute'>Spayed/Neutered: {foundPet.attributes.spayed_neutered}</li>
          <li className='li-attribute'>House Trained: {foundPet.attributes.spayed_neutered}</li>
          <li className='li-attribute'>Up-to-Date on Shots: {foundPet.attributes.shots_current}</li>
        </ul>
        </section>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  animals: state.animals
})
export default connect(mapStateToProps)(PetPage);