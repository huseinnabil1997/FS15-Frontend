import React, { useState } from 'react';
import './index.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
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
          Welcome back!
        </div>
        <div className="brief-text">
          Please login first
        </div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="brief-text">
            Forgot Password? <span>Click Here</span>
          </div>
          <div className="btn-container">
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
