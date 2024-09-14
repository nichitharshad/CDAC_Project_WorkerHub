import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
  const location = useLocation();
  const admin = location.state?.userData;
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/admin/profile', { state: { userData: admin } });
  };
  const handlePassUpdate = () => {
    if (admin) {
      navigate('/admin/changepass', { state: { userData: admin } });
    } else {
      console.error('Admin data is not available');
    }
  };
  const handleDeleteAccount = () => {
    if (admin) {
      navigate('/admin/delete', { state: { userData: admin } });
    } else {
      console.error('Admin data is not available');
    }
  };

  const handleHome = () => {
    if(admin){
      navigate("/admin/adminpage", { state: { userData: admin } } );

    }
    else {
      console.error("Admin data is not available");
    }
  }
  const handleWorkerTable = () => {
    navigate("/admin/workersTable", { state: { userData: admin } })
  };

  const handleUserTable = () => {
    navigate("/admin/usersTable", { state: { userData: admin } })
  };

  const handleAddAdmin = () => {
    if (admin) {
      navigate('/admin/addadmin', { state: { userData: admin } });
    } else {
      console.error('Admin data is not available');
    }
  };

  const handleAppointment = () => {
    if (admin) {
      navigate(`/appointment/u/${admin.id}`, { state : {userData: admin}});
   //   <Link to={`/appointment/u/${admin.id}`} state={{ userData: admin }} className="nav-link active" aria-current="page">Appointments</Link>
    } else {
      console.error('Admin data is not available');
    }
  };

  const handleAppointments = () => {
    if (admin) {
      navigate('/admin/allappointments', { state: { userData: admin } });
    } else {
      console.error('Admin data is not available');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Welcome to WorkerHub Admin {admin?.name} !!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link" onClick={handleHome}>Home</button>
            </li>
            <li className="nav-item">
              <button className='nav-link' onClick={handleUserTable}>Consumers</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleWorkerTable}>Workers</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleProfileClick}>Profile</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handlePassUpdate}>Change Password</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleDeleteAccount}>Delete Account</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleAddAdmin}>Add Admin</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleAppointment}>My Appointment</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleAppointments}>All Appointments</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;