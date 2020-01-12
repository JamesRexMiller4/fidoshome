import React from 'react';
import './Landing.scss';
import RegalPuppy from '../../images/regalpuppy.jpg';
import { Link } from 'react-router-dom'; 

const Landing = () => {
  return ( 
    <main>
      <header>
        <h1 className='header-h1'>Fido's</h1>
        <img src={RegalPuppy} alt='dog' className='header-profile'/>
        <h1 className='header-h1'>Home</h1>
      </header>
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