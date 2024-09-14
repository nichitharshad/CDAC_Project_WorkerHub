import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {validateSignup} from './UserSignupValidation';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [role, setRole] = useState('USER');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const validationErrors = validateSignup({ email, password, confirmPassword, phone, name, address, pincode,role });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const signUpData = {
      email,
      password,
      phone,
      name,
      address,
      pincode,
      role
    };
  
    try {
      const response = await axios.post("http://localhost:8080/user/add", signUpData, {
        headers: { 'Content-Type': 'application/json' }
      });
  alert('Signup successful! Please login to continue.');
      
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrors({ email: 'Email is already exist.' });
      }else{
      console.error(error);
      alert('Error signing up. Please try again.');
      }
    }
  };

  const handleLoginpage = () => navigate('/');

  return (
  <div className="d-flex justify-content-center align-items-center vh-100 "  
    style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className="p-4 rounded-3  w-25" style={{backgroundColor:'whitesmoke'}}>
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSignUp} className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">Email:</label>
          <div className="col-sm-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder='Enter Email'
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Password:</label>
          <div className="col-sm-10">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder='Enter Password'
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-5 control-label">Confirm Password:</label>
          <div className="col-sm-10">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              placeholder='Enter Confirm Password'
            />
            {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Phone:</label>
          <div className="col-sm-10">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder='Enter Phone'
            />
            {errors.phone && <span className="text-danger">{errors.phone}</span>}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder='Enter Name'
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Address:</label>
          <div className="col-sm-10">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder='Enter Address'
            />
            {errors.address && <span className="text-danger">{errors.address}</span>}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">PinCode:</label>
          <div className="col-sm-10">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="form-control"
              placeholder='Enter Pincode'
            />
            {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
          </div>
        </div>
      <br></br> 
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Sign Up</button>&nbsp;
            <button type="button" className="btn btn-secondary" onClick={handleLoginpage}>Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default UserSignup;