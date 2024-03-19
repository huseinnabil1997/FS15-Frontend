import React, { useState } from 'react';
import './register.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
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
          name: '',
          email: '',
          password: '',
          confirm_password: ''
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
          Lets Join our course!
        </div>
        <div className="brief-text">
          Please register first
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
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
          <div className="form-group">
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder='Confirm Password'
              value={formData.confirm_password}
              onChange={handleChange}
            />
            {errors.confirm_password && <p className="error-message">{errors.confirm_password}</p>}
          </div>
          <div className="button_signup">
            <button className="btn" type="submit">Sign Up</button>
          </div>
        </form>
        <div className="signup-text">
          Have an account? <span>Login here</span>
        </div>
      </div>
    </>
  );
};

export default Register;
