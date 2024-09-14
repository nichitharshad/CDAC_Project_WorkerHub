import React from 'react';
import { Container, Row, Col, Card, Button, Form, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const AdminProfile = () => {
  const location = useLocation();
  const admin = location.state?.userData;
  const navigate = useNavigate();

  if (!admin) {
    return <div>Admin data is not available hii</div>;
  }

  const handleEditClick = () => {
    navigate('/admin/profile/edit', { state: { userData: admin } });
  };

 

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
      <AdminNavBar />
 

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <h3>Admin Profile</h3>
                </Card.Title>
                <Card.Text>
                  <p>Email: {admin.email}</p>
                  <p>Name: {admin.name}</p>
                  <p>Address: {admin.address}</p>
                  <p>Phone: {admin.phone}</p>
                </Card.Text>
                <Nav className="justify-content-end">
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={handleEditClick}
                  >
                    Edit
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

export default AdminProfile;