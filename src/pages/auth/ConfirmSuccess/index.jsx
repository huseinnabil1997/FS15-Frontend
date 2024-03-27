import React, { useState } from 'react';
import './confirmSuccess.css';
import Header from '../../../components/Header';
import confirmation_success from '../../../assets/confirmation_success.svg';
import { Link } from 'react-router-dom';

const ConfirmSucces = () => {
  return (
    <>
      <Header confirmSucces />
      <div className="login-container">
        <img className='succes' src={confirmation_success} alt="confirmation success" />
        <div className='text-container'>
          <div className='title'>Email Confirmation Success</div>
          <div className='subtitle'>Your email already! Please login first to access the web</div>
        </div>
        <div className="button_confirmSucces">
          <Link to="/login"><button className="btn" type="submit">Login Here</button></Link>
        </div>
      </div>
    </>
  );
};

export default ConfirmSucces;
