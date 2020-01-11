import React from 'react';
import './Header.scss';
import VeryGoodBoy from '../../images/verygoodboy.PNG';

const Header = () => {
  return (
    <header>
      <h1 className='header-h1'>Fido's</h1>
      <img src={VeryGoodBoy} alt='dog' className='header-profile'/>
      <h1 className='header-h1'>Home</h1>
    </header>
  );
}

export default Header;