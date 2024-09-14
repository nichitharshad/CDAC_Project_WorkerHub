import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import AdminNavBar from './AdminNavBar';

const AdminChangePass = () => {
  const location = useLocation();
  const admin = location.state?.userData;
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');

  // Password validation function
  const isValidPassword = (password) => {
    const passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{4,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidPassword(newPass)) {
      alert('Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit, and be at least 6 characters long.');
      return;
    }

    if (password === "" || newPass==="" || confirmNewPass==="") {
      alert("Password is required.");
      return;
    }

    if (newPass !== confirmNewPass) {
      alert('New password and confirm new password do not match.');
      return;
    }

    try {
      const userData = { email: admin.email, password, newPass };
      const headers = { 'Content-Type': 'application/json' };
      const response = await axios.post("http://localhost:8080/user/changepass", userData, { headers });
      if (response.status === 200) {
        alert(response.data);
        navigate('/admin/adminpage', { state: { userData: admin } });
      } else {
        alert("Error changing password.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
      <AdminNavBar />
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border-0 shadow-sm" style={{marginTop:'50px'}}>
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
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>New Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={newPass}
                      onChange={(event) => setNewPass(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm New Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={confirmNewPass}
                      onChange={(event) => setConfirmNewPass(event.target.value)}
                    />
                  </Form.Group>
                  <Button type="submit">Change Password</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminChangePass;
