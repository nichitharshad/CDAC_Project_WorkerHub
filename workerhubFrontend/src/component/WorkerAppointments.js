import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import WorkerNavBar from './WorkerNavBar';

function WorkerAppointments() {
  const location = useLocation();
  const worker = location.state?.workerData;
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/appointment/w/${worker.id}`)
      .then(response => {
        console.log('Appointments:', response.data); 

        // Sort appointments by date in descending order
        const sortedAppointments = response.data.sort((a, b) => {
          // Assuming `date` is in ISO format, otherwise adjust the comparison logic
          return new Date(b.date) - new Date(a.date);
        });

        setAppointments(sortedAppointments);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, [worker.id]);

  const handleAccept = (appointmentId) => {
    axios.put(`http://localhost:8080/appointment/${appointmentId}/status?status=accepted`)
      .then(response => {
        setAppointments(prevAppointments =>
          prevAppointments.map(appointment =>
            appointment.id === appointmentId
              ? { ...appointment, status: 'accepted' }
              : appointment
          )
        );
      })
      .catch(error => console.error('Error accepting appointment:', error));
  };

  const handleDeny = (appointmentId) => {
    axios.put(`http://localhost:8080/appointment/${appointmentId}/status?status=denied`)
      .then(response => {
        setAppointments(prevAppointments =>
          prevAppointments.map(appointment =>
            appointment.id === appointmentId
              ? { ...appointment, status: 'denied' }
              : appointment
          )
        );
      })
      .catch(error => console.error('Error denying appointment:', error));
  };

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '730px' }}>
      <WorkerNavBar />
      <h2 style={{ textAlign: 'center',marginTop:'20px' }}>Your Appointments</h2><br></br>
      <div style={{ maxHeight: '550px', overflowY: 'auto' }}>
        <table className="table table-striped" style={{ width: '90%', marginLeft: '5%' }}>
          <thead style={{ position: 'static', zIndex: '1', top: '0' }}>
            <tr>
              <th>Consumer Name</th>
              <th>Consumer Phone No</th>
              <th>Appointment Date</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.user.name}</td>
                  <td>{appointment.user.phone}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.address}</td>
                  <td>{appointment.pincode}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {appointment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleAccept(appointment.id)}
                          className="btn btn-success"
                        >
                          Accept
                        </button>&nbsp;
                        <button
                          onClick={() => handleDeny(appointment.id)}
                          className="btn btn-danger"
                        >
                          Deny
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkerAppointments;
