import React from 'react';
import './index.css';
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>Otomobil</span>
      </div>
      <div className="nav">
        <button className="btn-signup">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </header>
  );
}

export default Header;
