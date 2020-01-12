import React, { Component } from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../../containers/Results/Results';

class Home extends Component {

  componentDidMount() {
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=fAK8vsY71R3Dkd8q7fAs76vYIpNB6Mpp4EY0huwEcQetNLY5FT&client_secret=1nvqj0muwVXgVvxrLcGrMapaRCMfIAR7BaMsYulQ',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      sessionStorage.setItem('token', data.access_token)
    })
    .catch(error => console.log(error))
  }

  render() { 
    return ( 
      <section className='home-section'>
        <Header />
        <section className='form-results-section'>
          <Form />
          <Results />
        </section>
      </section>
    );
  }
}

export default Home;