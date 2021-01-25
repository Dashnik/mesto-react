import React from 'react';
import logo from '../images/header-logo.jpg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип проекта Mesto" />
    </header>
  );
}

export default Header;
