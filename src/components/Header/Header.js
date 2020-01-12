import React from 'react';
import './Header.scss';
import PawLogo from '../../images/favicon-32x32.png';

const Header = () => {
  return (
    <header className='header-wrapper'>
      <h2 className='home-h2'>Fido's Home</h2>
      <img src={PawLogo} alt='paw print' className='paw-logo' />
    </header>
  );
}

export default Header;