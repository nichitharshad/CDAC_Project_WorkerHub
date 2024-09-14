import axios from 'axios';
import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const WorkerAdminDetails = () => {
  const location = useLocation();
  const worker = location.state.worker;
  const admin = location.state?.userData;
  const navigate = useNavigate();

  if (!worker) {
    return <div>Worker data is not available</div>;
  }

  const handleHomeClick = () => {
    navigate('/admin/adminpage',{state: {userData:admin}});
  };

  
  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      axios.get(`http://localhost:8080/worker/${worker.id}`)
        .then(response => {
          if (response.status === 200) {
            alert(response.data);
            navigate('/admin/workersTable', { state: { userData: admin } });
          }
        })
        .catch(error => {
          alert("Error deleting account");
        });
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
      <AdminNavBar></AdminNavBar>
        <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="border-0 shadow-sm">
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
                <p>Service: {worker.field}</p>
                <p>Experience: {worker.exp}</p>
                <p>VisitingCharge: {worker.vcharge} </p>
              </Card.Text>
              <Nav className="justify-content-between">
                <Button
                  variant="danger"
                  onClick={handleDeleteClick}
                >
                  Delete
                </Button>
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
    </Container>

    </div>
  );
};

export default WorkerAdminDetails;