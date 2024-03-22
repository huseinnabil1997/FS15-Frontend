import React, { useState } from 'react';
import './forgotPassword.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    email: '',
  });

  const history = useHistory();

  console.log(formData)

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
        // Handle form submission
        console.log(formData);
        setErrors({
          email: '',
        });
        history.push('/new-password');
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
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
