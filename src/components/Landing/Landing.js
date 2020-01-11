import React from 'react';
import './Landing.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom'; 

const Landing = () => {
  return ( 
    <main>
      <Header />
      <section className='welcome-section'>
        <h2 id='welcome-1' className='landing-welcome-h2'>Give your new best friend</h2>
        <Link to='/home'>
          <button id='enter-btn' className='btn' type='button'>Enter</button>
        </Link>
        <h2 id='welcome-2' className='landing-welcome-h2'>the home they always dreamed of</h2>
      </section>
    </main>
  );
}

export default Landing;