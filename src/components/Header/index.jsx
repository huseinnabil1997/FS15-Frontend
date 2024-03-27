import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png';
import User from '../../assets/user.png';
import Logout from '../../assets/logout.png';
import { Stack } from '@mui/material';

const Header = ({ confirmSucces = false, homePage = false }) => {
  return (
    <Stack width="100%" height="86px" position="absolute" top={0} direction="row" display="flex" justifyContent="space-between">
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
            <button className="icon_button" style={{ marginRight: 20 }} onClick={() => console.log("Logout clicked")}>
              <img src={Logout} alt="Logout" />
            </button>
          </>
        )}
      </div>
    </Stack>
  );
}

export default Header;
