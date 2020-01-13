import React, { Component } from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../../containers/Results/Results';
import { fetchToken } from '../../apiCalls/apiCalls';
class Home extends Component {

  componentDidMount() {
    fetchToken()
    .then(data => {
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