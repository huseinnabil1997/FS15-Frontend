import React, { useState } from 'react';
import './index.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
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
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              {...register('name')}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder='Email'
              {...register('email')}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              {...register('password')}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder='Confirm Password'
              {...register('confirm_password')}
            />
            {errors.confirm_password && <p className="error-message">{errors.confirm_password.message}</p>}
          </div>
          <div className="btn-container">
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
