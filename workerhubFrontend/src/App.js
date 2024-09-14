import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./component/Login"
import UserSignup from "./component/UserSignup"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import WorkerSignUp from './component/WorkerSignUp';
import WorkerProfile from './component/WorkerProfile';

import UserLogin from './component/UserLogin';
import UserProfile from './component/UserProfile';
import UserProfileEdit from './component/UserProfileEdit';
import WorkerLogin from './component/WorkerLogin';
import WorkerProfileEdit from './component/WorkerProfileEdit';
import UserChangePass from './component/UserChangePass';
import UserDelete from './component/UserDelete';
import WorkerChangePass from './component/WorkerChangePass';
import WorkerDelete from './component/WorkerDelete';
import AdminPage from './component/AdminPage';
import Appointment from './component/Appointment';  
import WorkerDetails from './component/WorkerDetails';
import WorkerTable from './component/WorkerTable';
import UserTable from './component/UserTable';
import UserDetails from './component/UserDetails';
import WorkerAdminDetails from './component/WorkerAdminDetails';
import UserAppointments from './component/UserAppointments';
import WorkerAppointments from './component/WorkerAppointments';
import AdminProfile from './component/AdminProfile';
import AdminChangePass from './component/AdminChangePass';
import AdminDelete from './component/AdminDelete';
import AdminProfileEdit from './component/AdminProfileEdit';
import AdminSignup from './component/AdminSignup';
import AllAppointments from './component/AllAppointments';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} /> // Route for the root URL
        <Route path="/login" element={<Login />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/worker/signup" element={<WorkerSignUp></WorkerSignUp>}></Route>
        <Route path="/worker/profile" element={<WorkerProfile></WorkerProfile>}></Route>
        <Route path="/user/userpage" element={<UserLogin></UserLogin>}></Route>
        <Route path='/user/profile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/user/profile/edit' element={<UserProfileEdit></UserProfileEdit>}></Route>
        <Route path='/worker/workerpage' element={<WorkerLogin></WorkerLogin>}></Route>
        <Route path='/worker/profile/edit' element={<WorkerProfileEdit></WorkerProfileEdit>}></Route>
        <Route path="/user/profile/updatepass" element={<UserChangePass></UserChangePass>}></Route>
        <Route path="/user/deleteaccount" element={<UserDelete></UserDelete>}></Route>
        <Route path="/worker/changepassword" element={<WorkerChangePass></WorkerChangePass>}></Route>
        <Route path='/worker/deleteaccount' element={<WorkerDelete></WorkerDelete>}></Route>
        <Route path='/admin/adminpage' element={<AdminPage></AdminPage>}></Route>
        <Route path="/worker/:id" element={<WorkerDetails></WorkerDetails>} />
        <Route path='/admin/workersTable' element={<WorkerTable></WorkerTable>}></Route>
        <Route path='/admin/usersTable' element={<UserTable></UserTable>}></Route>
        <Route path='/user/:id' element={<UserDetails></UserDetails>}></Route>
        <Route path='/worker/admin/:id' element={<WorkerAdminDetails></WorkerAdminDetails>}></Route>
        <Route path='/user/appointment/:id' element={<Appointment></Appointment>}></Route>
        <Route path='/appointment/u/:id' element={<UserAppointments></UserAppointments>}></Route>
        <Route path='/appointment/w/:id' element={<WorkerAppointments></WorkerAppointments>}></Route>
        <Route path='/admin/profile' element={<AdminProfile></AdminProfile>}></Route>
        <Route path='/admin/adminpage' element={<AdminPage></AdminPage>}></Route>
        <Route path='/admin/changepass' element={<AdminChangePass></AdminChangePass>}></Route>
        <Route path='/admin/delete' element={<AdminDelete></AdminDelete>}></Route>
        <Route path='/admin/profile/edit' element={<AdminProfileEdit></AdminProfileEdit>}></Route>
        <Route path='/admin/addadmin' element={<AdminSignup></AdminSignup>}></Route>
        <Route path="/admin/allappointments" element={<AllAppointments></AllAppointments>}></Route>
        {/* Add more routes as needed */}
      </Routes>
    </div>
  </Router>
);

export default App;




