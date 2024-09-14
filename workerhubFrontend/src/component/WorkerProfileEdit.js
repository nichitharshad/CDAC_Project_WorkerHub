import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import WorkerNavBar from './WorkerNavBar';

const WorkerProfileEdit = () => {
  const location = useLocation();
  const worker = location.state.workerData;
  const navigate = useNavigate();
  
  const [address, setAddress] = useState(worker.address);
  const [phone, setPhone] = useState(worker.phone);
  const [vcharge, setVisitingCharge] = useState(worker.vcharge);
  const [pincode, setPincode] = useState(worker.pincode);
  const [field, setField] = useState(worker.field);
  const [exp, setExp] = useState(worker.exp);

  const handleSaveChanges = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const workerData = { address, phone, vcharge, pincode, field, exp, email: worker.email };
      const response = await axios.post('http://localhost:8080/worker/edit', workerData, { headers });
      if (response.status === 200) {
        alert(response.data);
        navigate('/worker/profile', { state: { workerData: { ...worker, address, phone, vcharge, pincode, field, exp } } });
      } else {
        alert('Error updating worker profile');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '715px' }}>
      <WorkerNavBar />
      <div className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <h3>Edit Worker Profile</h3>
                </Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="address">
                      <Form.Label>Address:</Form.Label>
                      <Form.Control
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone:</Form.Label>
                      <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="vcharge">
                      <Form.Label>Visiting-Charge:</Form.Label>
                      <Form.Control
                        type="text"
                        value={vcharge}
                        onChange={(e) => setVisitingCharge(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="pincode">
                      <Form.Label>Pincode:</Form.Label>
                      <Form.Control
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="field">
                      <Form.Label>Service:</Form.Label>
                      <Form.Control
                        as="select"
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                      >
                        <option value="">Select a Service</option>
                        <option value="HOUSE_KEEPING">HOUSE_KEEPING</option>
                        <option value="PLUMBER">PLUMBER</option>
                        <option value="ELECTRICIAN">ELECTRICIAN</option>
                        <option value="ELECTRONICS">ELECTRONICS</option>
                        <option value="DRIVER">DRIVER</option>
                        <option value="COOK">COOK</option>
                        <option value="MECHANIC">MECHANIC</option>
                        <option value="BABYSITTER">BABYSITTER</option>
                        <option value="PAINTER">PAINTER</option>
                        <option value="CARPENTER">CARPENTER</option>
                        <option value="LABOUR">LABOUR</option>
                        <option value="GARDENER">GARDENER</option>
                        <option value="PRIEST">PRIEST</option>
                        <option value="PESTCONTROL">PESTCONTROL</option>
                        <option value="SECURITY_GUARD">SECURITY_GUARD</option>
                        <option value="TRANSPORT">TRANSPORT</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="rating">
                      <Form.Label>Experience:</Form.Label>
                      <Form.Control
                        type="number"
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Card.Text>
                <Button variant="primary" className="float-end ms-2" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
                <Button variant="secondary" className="float-end" onClick={() => navigate('/worker/profile', { state: { workerData: worker } })}>
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

export default WorkerProfileEdit;
