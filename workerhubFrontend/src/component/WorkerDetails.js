import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const WorkerDetails = () => {
  const location = useLocation();
  const worker = location.state.worker;
  const user = location.state?.userData;
  const navigate = useNavigate();

  if (!worker) {
    return <div>Worker data is not available</div>;
  }

  const handleHomeClick = () => {
    navigate('/user/userpage',{state: {userData:user}});
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
    <Container className="mt-5" >
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="border-0 shadow-sm" style={{marginTop:'50px'}}>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h3>Worker Details</h3>
              </Card.Title>
              <Card.Text>
                <p>ID: {worker.id}</p>
                <p>Email: {worker.email}</p>
                <p>Name: {worker.name}</p>
                <p>Address: {worker.address}</p>
                <p>Phone: {worker.phone}</p>
                <p>Visiting Charge:{worker.vcharge}</p>
                <p>Pincode: {worker.pincode}</p>
                <p>Service: {worker.field}</p>
                <p>Experience: {worker.exp}</p>
              </Card.Text>
              <Nav className="justify-content-end">
                <Button
                  variant="secondary"
                  onClick={handleHomeClick}
                >
                  Home
                </Button>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container></div>
  );
};

export default WorkerDetails;
