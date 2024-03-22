import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png';
import User from '../../assets/user.png';
import Logout from '../../assets/logout.png';

const Header = ({ confirmSucces = false, homePage = false }) => {
  const history = useHistory();
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>Otomobil</span>
      </div>
      <div className="nav">
        {!confirmSucces && !homePage && (
          <>
            <Link to="/register">
              <button className="btn-signup">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
          </>
        )}
        {homePage && (
          <>
            <button className="icon_button" onClick={() => console.log("Cart clicked")}>
              <img src={Cart} alt="Cart" />
            </button>
            <button className="button_header">My Class</button>
            <button className="button_header">Invoice</button>
            <div className="separator" />
            <button className="icon_button" style={{ marginLeft: 20, marginRight: 20 }} onClick={() => console.log("User clicked")}>
              <img src={User} alt="User" />
            </button>
            <button className="icon_button" style={{ marginRight: 20 }} onClick={() => history.push("/login")}>
              <img src={Logout} alt="Logout" />
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
