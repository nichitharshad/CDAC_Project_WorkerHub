import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import UserNavBar from './UserNavBar';
import AdminNavBar from './AdminNavBar';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const Appointment = () => {
  const location = useLocation();
  const user = location.state?.userData;
  const worker = location.state.worker;
  const admin = location.state?.userData;
  const navigate = useNavigate();

  const [address, setAddress] = useState(user?.address || '');
  const [pincode, setPincode] = useState(user?.pincode || '');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const handleBookAppointment = async (e) => {
    e.preventDefault();
  
    const appointmentDetails = {
     
      address: address,
      pincode: pincode,
      date: selectedDate.toISOString().slice(0, 10),
      user: { id: user.id },
      worker: { id: worker.id },
    };
  
    try {
      const response = await axios.post('http://localhost:8080/appointment/add', appointmentDetails, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Appointment Booked successfully !!!');
      if (user.role === 'USER') {
        navigate('/user/userpage', { state: { userData: user } });
      } else {
        navigate('/admin/adminpage', { state: { userData: admin } });
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '730px' }}>
    <div>
      {user.role === 'ADMIN' ? <AdminNavBar /> : <UserNavBar />}
    </div>
    <div className="container mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="border-0 shadow-sm" style={{ marginTop: '50px', backgroundColor: 'whitesmoke' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h1 className="text-center mb-4">Appointment Booking</h1>
              </Card.Title>
              <form onSubmit={handleBookAppointment} className="mx-auto p-4  rounded d-flex flex-column" style={{ maxWidth: '500px', backgroundColor: 'whitesmoke' }}>
                
                
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="workerName" className="form-label" style={{ flex: '0 0 200px' }}>
                    Worker Name:
                  </label>
                  <input
                    type="text"
                    id="workerName"
                    name="workerName"
                    value={worker.name}
                    className="form-control"
                    placeholder="Enter worker name"
                    readOnly
                    style={{ flex: 1 }}
                  />
                </div>
  
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="workerField" className="form-label" style={{ flex: '0 0 200px' }}>
                    Worker Service:
                  </label>
                  <input
                    type="text"
                    id="workerField"
                    name="workerField"
                    value={worker.field}
                    className="form-control"
                    placeholder="Enter worker field"
                    readOnly
                    style={{ flex: 1 }}
                  />
                </div>
  
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="visitingCharge" className="form-label" style={{ flex: '0 0 200px' }}>
                    Visiting Charge:
                  </label>
                  <input
                    type="text"
                    id="visitingCharge"
                    name="visitingCharge"
                    value={worker.vcharge}
                    className="form-control"
                    placeholder="Enter visiting charge"
                    readOnly
                    style={{ flex: 1 }}
                  />
                </div>
  
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="address" className="form-label" style={{ flex: '0 0 200px' }}>
                    Consumer's Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    placeholder="Enter Address"
                    style={{ flex: 1 }}
                  />
                </div>
  
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="pincode" className="form-label" style={{ flex: '0 0 200px' }}>
                    Consumer's PinCode:
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="form-control"
                    placeholder="Enter Pincode"
                    style={{ flex: 1 }}
                  />
                </div>
  
                <div className="mb-3">
            <label htmlFor="appointmentDate" className="form-label">
              Appointment Date:
            </label><br></br>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
              id="appointmentDate"
              minDate={new Date()}
              placeholderText="Select a date"
            />
          </div>
  
                <div className="d-flex justify-content-between mt-3">
                  <button type="submit" className="btn btn-primary">
                    Book Appointment
                  </button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
  

  );
};

export default Appointment;
