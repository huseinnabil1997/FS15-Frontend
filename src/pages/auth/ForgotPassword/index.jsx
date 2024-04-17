import React, { useState } from 'react';
import './forgotPassword.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    general: '',
  });

  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validationSchema.validate(formData, { abortEarly: false })
      .then(() => {
        axiosInstance.post('/User/ForgetPassword?email=' + formData.email);
        setErrors({
          email: '',
        });
        history.push('/');
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
        setErrors({
          ...errors,
          general: err.response.data ?? '', // set error general
        });
      });
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="welcome_text">
          Reset Password
        </div>
        <div className="brief_text">
          Send OTP code to your email address
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          {errors.general && <p className="error-message">{errors.general}</p>}
          <div className="button_login">
            <Link to="/login">
              <button style={{ marginRight: 20 }} className="btn_cancel" type="submit">Cancel</button>
            </Link>
            <button className="btn" type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
