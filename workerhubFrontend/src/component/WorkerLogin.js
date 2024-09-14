import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const WorkerLogin = () => {
  const location = useLocation();
  const worker = location.state?.workerData;
  const navigate = useNavigate();

  const handleProfileClick = () => {
    console.log('Worker:', worker); 
  
    if (worker) {
      navigate('/worker/profile', { state: { workerData: worker } });
      console.log('Navigating to profile page'); 
    } else {
      console.error('Worker data is not available');
    }
  };
  

  const handlePasswordChangeClick = () => {
    if (worker) {
      navigate('/worker/changepassword', { state: { workerData: worker } });
    } else {
      console.error('Worker data is not available');
    }
  };

  const handleDeleteAccountClick = () => {
    if(worker){
      navigate("/worker/deleteaccount",{ state: { workerData: worker } } )
    }
    else{
      console.error('WorkerW data is not available');
    }
  };

  const handleLoginpage = () => {
    alert("Logout Successfully !!!")
  navigate('/');
  } 

  return (
    <div className="container mt-5" style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
      <h2 className="text-center mb-4">Worker Information</h2>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          {/* Left side links */}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/worker/appointments" className="nav-link">Appointments</Link>
          </li>
          <li className="nav-item">
          <button to="/worker/profile" className="nav-link" onClick={handleProfileClick}>
           Profile
           </button>
          </li>
          <li className="nav-item">
            <button onClick={handlePasswordChangeClick} className="nav-link">Change Password</button>
          </li>
          <li className="nav-item">
            <button onClick={handleDeleteAccountClick} className="nav-link text-danger">Delete Account</button>
          </li>
          <li className="nav-item">
                <button className="nav-link" onClick={handleLoginpage}>Logout</button>
              </li>
        </ul>
      </nav>
    </div>
  );
};

export default WorkerLogin;