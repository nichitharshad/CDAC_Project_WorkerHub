import axios from 'axios';
import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const UserDetails = () => {
  const location = useLocation();
  const user = location.state.user;
  const admin = location.state?.userData;
  const worker = location.state?.workerData;
  const navigate = useNavigate();

  if (!user) {
    return <div>User data is not available</div>;
  }

  const handleHomeClick = () => {
    navigate('/admin/usersTable',{state: {userData:user}});
  };

  
  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      axios.get(`http://localhost:8080/user/${user.id}`)
        .then(response => {
          if (response.status === 200) {
            alert(response.data);
            navigate('/admin/usersTable', { state: { userData: admin } });
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
                <h3>User Details</h3>
              </Card.Title>
              <Card.Text>
                <p>ID: {user.id}</p>
                <p>Email: {user.email}</p>
                <p>Name: {user.name}</p>
                <p>Address: {user.address}</p>
                <p>Phone: {user.phone}</p>
              </Card.Text>
              <Nav className="justify-content-between">
                <Button
                  variant="danger"
                  onClick={handleDeleteClick}
                >
                  Delete
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

export default UserDetails;
