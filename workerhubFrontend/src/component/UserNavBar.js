import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const UserNavBar = () => {
  const location = useLocation();
  const user = location.state?.userData;
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user) {
      navigate('/user/profile', { state: { userData: user } });
    } else {
      console.error('User data is not available');
    }
  };
  const handlePassUpdate = () => {
    if (user) {
      navigate('/user/profile/updatepass', { state: { userData: user } });
    } else {
      console.error('User data is not available');
    }
  };
  const handleLogout = () => {
   
    localStorage.removeItem('token');
    navigate('/login');
  };
  const handleDeleteAccount = () => {
    if (user) {
      navigate('/user/deleteaccount', { state: { userData: user } });
    } else {
      console.error('User data is not available');
    }
  };
  const handleHomeClick = () => {
    navigate('/user/userpage', { state: { userData: user } });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Welcome  to  WorkerHub  {user?.name} !!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/appointment/u/${user.id}`} state={{ userData: user }} className="nav-link active" aria-current="page">Appointments</Link>
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

export default UserNavBar;