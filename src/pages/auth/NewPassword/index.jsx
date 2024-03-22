import React, { useState } from 'react';
import './newPassword.css';
import Header from '../../../components/Header';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

const NewPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmNewPassword: '',
  });
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmNewPassword: '',
  });

  console.log(formData);

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required('New Password is required').min(6, 'Password must be at least 6 characters'),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm New Password is required'),
  });

  const history = useHistory();

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
        console.log(formData);
        setErrors({
          newPassword: '',
          confirmNewPassword: '',
        });
        history.push('/login');
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
          New Password
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder='New Password'
              value={formData.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && <p className="error-message">{errors.newPassword}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              placeholder='Confirm New Password'
              value={formData.confirmNewPassword}
              onChange={handleChange}
            />
            {errors.confirmNewPassword && <p className="error-message">{errors.confirmNewPassword}</p>}
          </div>
          <div className="button_login">
            <Link to="/login"><button style={{marginRight: 20}} className="btn_cancel" type="button">Cancel</button></Link>
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPassword;
