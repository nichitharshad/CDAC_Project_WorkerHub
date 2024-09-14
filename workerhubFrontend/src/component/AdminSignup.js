import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateSignup } from './UserSignupValidation';
import AdminNavBar from './AdminNavBar';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState(''); 
  const [role, setRole] = useState('ADMIN');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const admin = location.state?.userData;

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const validationErrors = validateSignup({ email, password, confirmPassword, phone, name, address, pincode }); // Include pincode in validation
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
      navigate('/admin/adminpage', { state: { userData: admin } });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrors({ email: 'Email already exists.' });
      } else {
        console.error(error);
        alert('Error signing up. Please try again.');
      }
    }
  };

  const handleLoginpage = () => navigate("/admin/adminpage", { state: { userData: admin } });

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '730px' }}>
      <AdminNavBar></AdminNavBar>
      <div className="d-flex justify-content-center align-items-center vh-90">
        <div className="p-4 rounded-3 w-25" style={{ backgroundColor: 'whitesmoke',marginTop:'40px' }}>
          <h2 className="text-center">Admin Sign Up</h2>
          <form onSubmit={handleSignUp} className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Email:</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
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
                />
                {errors.address && <span className="text-danger">{errors.address}</span>}
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Pincode:</label> {/* Added pincode input field */}
              <div className="col-sm-10">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="form-control"
                />
                {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
              </div>
            </div>
           <br></br>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">Sign Up</button>&nbsp;
                <button type="button" className="btn btn-secondary" onClick={handleLoginpage}>Back</button>
              </div>
            </div>
          </form>
        </div>
      </div> 
    </div>
  );
};

export default AdminSignup;
