import React, { useEffect, useState } from 'react';
import './confirmSuccess.css';
import Header from '../../../components/Header';
import confirmation_success from '../../../assets/confirmation_success.svg';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const ConfirmSucces = () => {
  const [error, setError] = useState(null);
  const [isActivated, setIsActivated] = useState(false); // state untuk menandai apakah user sudah diaktifkan
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const user_id = parseInt(searchParams.get('user_id'), 10);
  const email = searchParams.get('email');

  const activateUser = async () => {
    try {
      await axiosInstance.get(`/User/ActivateUser?user_id=${user_id}&email=${email}`);
      setIsActivated(true); // set state isActivated ke true setelah berhasil
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    // panggil activateUser hanya jika user belum diaktifkan
    if (!isActivated) {
      activateUser();
    }
  }, [isActivated]);

  useEffect(() => {
    // panggil activateUser hanya jika user belum diaktifkan
    if (!isActivated) {
      activateUser();
    }
  }, [isActivated]);

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
