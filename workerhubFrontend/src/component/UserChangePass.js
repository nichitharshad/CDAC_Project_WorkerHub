import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import UserNavBar from './UserNavBar';

const UserChangePass = () => {
  const location = useLocation();
  const user = location.state?.userData;
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');

  // Password validation function
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === '' || newPass === '' || confirmNewPass === '') {
      alert('All fields are required.');
      return;
    }

    if (!isValidPassword(newPass)) {
      alert('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 6 characters long.');
      return;
    }

    if (newPass !== confirmNewPass) {
      alert('New password and confirm new password do not match');
      return;
    }

    try {
      const userData = { email: user.email, password, newPass };
      const headers = { 'Content-Type': 'application/json' };
      const response = await axios.post('http://localhost:8080/user/changepass', userData, { headers });
      if (response.status === 200) {
        alert(response.data);
        navigate('/user/userpage', { state: { userData: user } });
      } else {
        alert('Error changing password');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleHomeClick = () => {
    navigate('/user/userpage', { state: { userData: user } });
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '715px' }}>
      <UserNavBar />
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="border-0 shadow-sm" style={{ marginTop: '50px', backgroundColor: 'whitesmoke' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h2>Change Password</h2>
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>New Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPass}
                    onChange={(event) => setNewPass(event.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm New Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmNewPass}
                    onChange={(event) => setConfirmNewPass(event.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit">Change Password</Button>&nbsp;&nbsp;
                <Button variant="secondary" onClick={handleHomeClick}>
                  Home
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserChangePass;
