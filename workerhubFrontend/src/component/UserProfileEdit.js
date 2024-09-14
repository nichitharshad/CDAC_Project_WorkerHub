import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import UserNavBar from './UserNavBar';

const UserProfileEdit = () => {
  const location = useLocation();
  const user = location.state.userData;
  const navigate = useNavigate();
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [pincode, setPincode] = useState(user.pincode);
  const [errors, setErrors] = useState({});

  const handleSaveChanges = async () => {
    // Validation
    const newErrors = {};
    if (!phone || !/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!address.trim()) {
      newErrors.address = 'Address cannot be empty.';
    }
    if (!pincode || !/^\d{6}$/.test(pincode)) {
      newErrors.pincode = 'Pincode must be exactly 6 digits.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); 

    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const userData = { phone, address, pincode, email: user.email };
      const response = await axios.post('http://localhost:8080/user/edit', userData, { headers });
      if (response.status === 200) {
        alert(response.data);
        navigate('/user/profile', { state: { userData: { ...user, phone, address, pincode } } });
      } else {
        alert('Error updating user profile');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '730px' }}>
      <UserNavBar />
      <div className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <h3>Edit User Profile</h3>
                </Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone:</Form.Label>
                      <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="address">
                      <Form.Label>Address:</Form.Label>
                      <Form.Control
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        isInvalid={!!errors.address}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="pincode">
                      <Form.Label>Pincode:</Form.Label>
                      <Form.Control
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        isInvalid={!!errors.pincode}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.pincode}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </Card.Text>
                <Button variant="primary" className="float-end" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
                <Button variant="secondary" className="float-end" onClick={() => navigate('/user/profile', { state: { userData: user } })}>
                  Cancel
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfileEdit;
