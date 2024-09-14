import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import UserNavBar from './UserNavBar';
import AdminNavBar from './AdminNavBar';

function AllAppointments() {
  const location = useLocation();
  const user = location.state?.userData;
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/appointment/all')
      .then(response => {
        console.log('Appointments:', response.data); 
        
        
        const sortedAppointments = response.data.sort((a, b) => {
          
          return b.id - a.id;
        });

        setAppointments(sortedAppointments);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '730px' }}>
      <div>
        {user.role === 'ADMIN' ? <AdminNavBar /> : <UserNavBar />}
      </div>
      <h2 style={{ color: 'black', textAlign: 'center',marginTop:'20px' }}>All Appointments</h2><br></br>
      <div style={{ maxHeight: '550px', overflowY: 'auto' }}>
        <table className="table table-striped" style={{width:'90%',marginLeft:'5%'}}>
          <thead style={{ position: 'static', zIndex: '1', top: '0' }}>
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>Worker Id</th>
              <th>Worker Name</th>
              <th>Worker Field</th>
              <th>Worker Phone</th>
              <th>Visiting Charge</th>
              <th>Address</th>
              <th>PinCode</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.user.id}</td>
                  <td>{appointment.user.name}</td>
                  <td>{appointment.worker.id}</td>
                  <td>{appointment.worker.name}</td>
                  <td>{appointment.worker.field}</td>
                  <td>{appointment.worker.phone}</td>
                  <td>{appointment.worker.vcharge}</td>
                  <td>{appointment.address}</td>
                  <td>{appointment.pincode}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAppointments;
