import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const WorkerNavBar = () => {
  const location = useLocation();
  const worker = location.state?.workerData;
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/worker/profile',{ state: { workerData: worker } });
  };

  const handleProfileClick = () => {
    if (worker) {
      navigate('/worker/profile', { state: { workerData: worker } });
      console.log()
    } else {
      console.error('Worker data is not available');
    }
  };

  const handlePassUpdate = () => {
    if (worker) {
      navigate('/worker/changepassword', { state: { workerData: worker } });
    } else {
      console.error('Worker data is not available');
    }
  };
  const handleLogout = () => {
    // Clear local storage or perform any other logout logic here
    //localStorage.removeItem('token');
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    if(worker){
      navigate("/worker/deleteaccount",{ state: { workerData: worker } } )
    }
    else{
      console.error('WorkerW data is not available');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Welcome  to  WorkerHub {worker?.name} !!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={`/appointment/w/${worker.id}`} state={{ workerData: worker }} className="nav-link">Appointments</Link>
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
              <button className="nav-link" onClick={handleHomeClick}>Home</button>
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

export default WorkerNavBar;