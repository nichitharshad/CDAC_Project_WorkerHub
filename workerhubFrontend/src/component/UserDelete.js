import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import UserNavBar from './UserNavBar';

const UserDelete = () => {
  const location = useLocation();
  const user = location.state?.userData;
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    try {
      const headers = { 'Content-Type': 'application/json' };
      const userData = { email: user.email, password };
      

      
        if (window.confirm('Are you sure you want to delete your account?')) {
          const response = await axios.post('http://localhost:8080/user/delete', userData, { headers });
          if (response.status === 200) {
          alert(response.data);
          navigate('/login');
        }
      } else {
        alert('Error deleting account');
      }
    } catch (error) {
      if (error.response && error.response.data === 'Invalid password') {
        alert('Invalid password. Please try again.');
      } else {
        console.log(error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/login3.jpg)',backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '730px',
      }}
    >
      <UserNavBar />
      <Card
        className="border-0 shadow-sm"
        style={{ backgroundColor: 'whitesmoke', width: '50%', marginLeft: '25%', marginTop: '50px' }}
      >
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <h2 className="text-center">Delete Account</h2>
          </Card.Title>
          <form onSubmit={handleSubmit} className="form-horizontal">
            <div className="form-group">
              <label className="control-label">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label className="control-label">Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="form-control"
                required
              />
            </div>
            <br />
            <div className="form-group">
              <Button type="submit" variant="danger">
                Delete Account
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDelete;
