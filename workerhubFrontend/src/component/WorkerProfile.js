import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import WorkerNavBar from './WorkerNavBar';

const WorkerProfile = () => {
  const location = useLocation();
  const worker = location.state?.workerData;
  const navigate = useNavigate();

  if (!worker) {
    return <div>Worker data is not available</div>;
  }

  const handleEditClick = () => {
    navigate('/worker/profile/edit', { state: { workerData: worker } });
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'715px' }}>
     <WorkerNavBar />
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="border-0 shadow-sm" style={{marginTop:'50px'}}>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h3>Worker Profile</h3>
              </Card.Title>
              <Card.Text>
                <p>Email: {worker.email}</p>
                <p>Name: {worker.name}</p>
                <p>Address: {worker.address}</p>
                <p>Phone: {worker.phone}</p>
                <p>Visiting charge:{worker.vcharge}</p>
                <p>Pincode: {worker.pincode}</p>
                <p>Service:{worker.field}</p>
                <p>Experience: {worker.exp }</p>
              </Card.Text>
              <Button
                variant="primary"
                className="float-end"
                onClick={handleEditClick}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WorkerProfile;
