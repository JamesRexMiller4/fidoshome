import React from 'react';
import './Landing.scss';
import Header from '../Header/Header';

const Landing = () => {
  return ( 
    <main>
      <Header />
      <section>
        <h2 id='welcome-1' className='landing-welcome-h2'>Give your new best friend</h2>
        <h2 id='welcome-2' className='landing-welcome-h2'>the home they always dreamed of</h2>
      </section>
    </main>
  );
}

export default Landing;