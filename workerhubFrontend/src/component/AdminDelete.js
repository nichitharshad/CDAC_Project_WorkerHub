import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import UserNavBar from './UserNavBar';
import AdminNavBar from './AdminNavBar';

const AdminDelete = () => {
  const location = useLocation();
  const admin = location.state?.userData;
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
      const headers = { 'Content-Type': 'application/json'  };
      const userData = { email: admin.email, password };
      
     
        if (window.confirm('Are you sure you want to delete your account?')) {
          const response = await axios.post("http://localhost:8080/user/delete", userData, { headers });
          if (response.status === 200) {
          alert(response.data);
          navigate("/login");
        }
      } else {
        alert("Error deleting account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
      <AdminNavBar></AdminNavBar>
      <div className="container">
      <Card className="border-0 shadow-sm" style={{backgroundColor:'whitesmoke',width:'50%',marginLeft:'25%',marginTop:'50px'}} >
            <Card.Body>
              <Card.Title className="text-center mb-4">
      
      <h2 className="text-center">Delete Account</h2></Card.Title>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">Password:</label>
          <div className="col-sm-10">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-4 control-label">Confirm Password:</label>
          <div className="col-sm-10">
            <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="form-control" />
          </div>
        </div><br></br>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-danger">Delete Account</button>
          </div>
        </div>
      </form>
      </Card.Body>
          </Card> 
    </div>
    </div>
  );
};

export default AdminDelete;