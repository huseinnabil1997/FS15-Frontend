import React, { useState } from 'react';
import './login.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const getToken = async (email, password) => {
    try {
      await axiosInstance.post('/User/Login', { email, password })
      return res.data.token;
    } catch (err) {
      setErrors({
        ...errors,
        general: err.response.data, // set error general
      });
      throw err;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    validationSchema.validate(formData, { abortEarly: false })
      .then(async () => {
        const token = await getToken(formData.email, formData.password);
        localStorage.setItem('token', token);
        setErrors({
          email: '',
          password: '',
          general: '',
        });
        history.push('/');
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await validationSchema.validate(formData, { abortEarly: false });

  //     const token = await getToken(formData.email, formData.password);

  //     if (!token) {
  //       throw new Error('Token not found');
  //     }

  //     localStorage.setItem('token', token);

  //     setErrors({
  //       email: '',
  //       password: ''
  //     });

  //     history.push('/');
  //   } catch (err) {
  //     let errorMessage = 'Login failed';

  //     if (err.response && err.response.data && err.response.data.message) {
  //       errorMessage = err.response.data.message;
  //     } else if (err.message === 'Token not found') {
  //       errorMessage = 'Token is missing. Please try again.';
  //     } else {
  //       errorMessage = err.message;
  //     }

  //     setErrors({
  //       general: errorMessage
  //     });
  //   }
  // };

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
          {errors.general && <p className="error-message">{errors.general}</p>}
          <div className="brief-text">
            Forgot Password? <Link to="/forgot-password"><span>Click Here</span></Link>
          </div>
          <div className="button_login">
            <button className="btn" type="submit">Login</button>
          </div>
        </form>
        <div className="signup-text">
          Don't have an account?<Link to="/register"><span>Sign Up here</span></Link>
        </div>
      </div>
    </>
  );
};

export default Login;
