import React from 'react';
import './PetPage.scss';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const PetPage = ({ animals, id }) =>  {
  const foundPet = animals.find(animal => animal.id === parseInt(id))
    return ( 
      <section>
        <Header />
        <section className='pet-page-section'>
        <img src={foundPet.photos[0].medium} alt='pet-profile' className='pet-profile-pic' />
        <h2 className='pet-name-h2'>{foundPet.name}</h2>
        <section className='details-attributes-section'>
        <ul className='ul'>
          <p className='ul-p'>Attributes:</p>
          <li className='li'>Breed: <span className='span-pet-page'>{foundPet.breeds.primary}</span></li>
          <li className='li'>Color: <span className='span-pet-page'>{foundPet.colors.primary}</span></li>
          <li className='li'>Gender: <span className='span-pet-page'>{foundPet.gender}</span></li>
        </ul>
        <ul className='ul'>
          <p className='ul-p'>Other Details:</p>
          <li className='li'>Spayed/Neutered: <span className='span-pet-page'>{`${foundPet.attributes.spayed_neutered}`}</span></li>
          <li className='li'>House Trained: <span className='span-pet-page'>{`${foundPet.attributes.house_trained}`}</span></li>
          <li className='li'>Up-to-Date on Shots: <span className='span-pet-page'>{`${foundPet.attributes.shots_current}`}</span></li>
        </ul>
        <ul className='ul'>
          <p className='ul-p'>Contact:</p>
          <li className='li'>Email: <span className='span-pet-page'>{foundPet.contact.email}</span></li>
          <li className='li'>Phone: <span className='span-pet-page'>{foundPet.contact.phone}</span></li>
          <li className='li'>Address: <span className='span-pet-page'>{`${foundPet.contact.address.address1} ${foundPet.contact.address.city}, ${foundPet.contact.address.state} ${foundPet.contact.address.postcode}`}</span></li>
        </ul>
        </section>
        </section>
      </section>
    );
}

export const mapStateToProps = state => ({
  animals: state.animals
})

export default connect(mapStateToProps)(PetPage);

PetPage.propTypes = {
  animals: PropTypes.array,
  id: PropTypes.string
}