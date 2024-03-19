import React, { useState } from 'react';
import './login.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  console.log(formData)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
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
          password: ''
        });
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
        <div className="welcome-text">
          Welcome back!
        </div>
        <div className="brief-text">
          Please login first
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
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="brief-text">
            Forgot Password? <span>Click Here</span>
          </div>
          <div className="button_login">
            <button className="btn" type="submit">Login</button>
          </div>
        </form>
        <div className="signup-text">
          Don't have an account?<span>Sign Up here</span>
        </div>
      </div>
    </>
  );
};

export default Login;
