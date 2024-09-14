import React from 'react';
import { Container, Row, Col, Card, Button, Form, Nav } from 'react-bootstrap';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import UserNavBar from './UserNavBar'

const UserProfile = () => {
  const location = useLocation();
  const user = location.state?.userData;
  const navigate = useNavigate();

  if (!user) {
    return <div>User data is not available</div>;
  }

  const handleEditClick = () => {
    navigate('/user/profile/edit', { state: { userData: user } });
  };

  const handleHomeClick = () => {
    navigate('/user/userpage ' , {state : {userData: user}});
  };


  return (

<div  style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'715px' }}>
      <UserNavBar />
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="border-0 shadow-sm" style={{marginTop:'50px',backgroundColor:'whitesmoke'}}>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h3>Consumer Profile</h3>
              </Card.Title>
              <Card.Text>
                <p>Email: {user.email}</p>
                <p>Name: {user.name}</p>
                <p>Address: {user.address}</p>
                <p>Phone: {user.phone}</p>
              </Card.Text>
              <Nav className="justify-content-end">
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={handleEditClick}
                >
                  Edit
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
      </div>  
   
  );
};

export default UserProfile;