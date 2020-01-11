import React, { Component } from 'react';
import './Home.scss';
import PawLogo from '../../images/favicon-32x32.png';
import Form from '../Form/Form';
import Results from '../Results/Results';

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
    .then(data => sessionStorage.setItem('token', data.access_token))
    .catch(error => console.log(error))
  }

  render() { 
    return ( 
      <section>
        <div className="header-wrapper">
          <h2 className="home-h2">Fido's Home</h2>
          <img src={PawLogo} alt='paw print' className='paw-logo' />
        </div>
        <section>
          <Form />
          <Results />
        </section>
      </section>
    );
  }
}

export default Home;