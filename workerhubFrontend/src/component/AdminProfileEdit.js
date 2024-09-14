import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const AdminProfileEdit = () => {
  const location = useLocation();
  const admin = location.state?.userData;
  const navigate = useNavigate();
  const [phone, setPhone] = useState(admin.phone);
  const [address, setAddress] = useState(admin.address);
  const [pincode, setPincode] = useState(admin.pincode);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    admin.phone = e.target.value;
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    admin.address = e.target.value;
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
    admin.pincode = e.target.value;
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[1-9][0-9]{9}$/; // 10 digits and doesn't start with 0
    return phoneRegex.test(phone);
  };

  const isValidPincode = (pincode) => {
    const pincodeRegex = /^[1-9][0-9]{5}$/; // 6 digits and doesn't start with 0
    return pincodeRegex.test(pincode);
  };

  const handleSaveChanges = async () => {
    if (!phone || !address || !pincode) {
      alert('All fields are required.');
      return;
    }

    if (!isValidPhone(phone)) {
      alert('Phone number must be 10 digits long and cannot start with 0.');
      return;
    }

    if (!isValidPincode(pincode)) {
      alert('Pincode must be 6 digits long and cannot start with 0.');
      return;
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const adminData = { phone, address, pincode, email: admin.email };
      const response = await axios.post('http://localhost:8080/user/edit', adminData, { headers });
      if (response.status === 200) {
        alert(response.data);
        navigate('/admin/profile', { state: { userData: { ...admin, phone, address, pincode } } });
      } else {
        alert('Error updating admin profile');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '730px' }}>
      <AdminNavBar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <h3>Edit Admin Profile</h3>
                </Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone:</Form.Label>
                      <Form.Control
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="address">
                      <Form.Label>Address:</Form.Label>
                      <Form.Control
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    </Form.Group>
                    
                    <Form.Group controlId="pincode">
                      <Form.Label>Pincode:</Form.Label>
                      <Form.Control
                        type="text"
                        value={pincode}
                        onChange={handlePincodeChange}
                      />
                    </Form.Group>
                  </Form>
                </Card.Text>
                <Button variant="primary" className="float-end ms-2" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
                <Button variant="secondary" className="float-end" onClick={() => navigate('/admin/profile', { state: { userData: admin } })}>
                  Cancel
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminProfileEdit;
