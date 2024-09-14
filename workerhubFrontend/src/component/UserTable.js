import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const UserTable = () => {
  const location = useLocation();
  const admin = location.state?.userData;
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  

  useEffect(() => {
    axios.get('http://localhost:8080/user/allUsers')
      .then(response => response.data)
      .then(data => setUsers(data))
      .catch(error => console.error(error)); 
  }, []);

 

  return (
   <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
    <AdminNavBar />
    <div className="container"><br></br>
      <h2 style={{textAlign:'center'}}>Consumer Table</h2>
      <div className="row mb-3">
        <div className="col-md-4" style={{marginLeft:'25%'}}>
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search by username" />
        </div>
        
      </div>
      <div style={{ maxHeight: '520px', overflowY: 'auto',width:'50%',textAlign:'center',marginLeft:'25%' }}>
      <table className="table table-striped">
        <thead style={{position:'sticky',zIndex:'1',top:'0'}}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>View</th>
            
          </tr>
        </thead>
        <tbody>
  {users.filter(user => user.email?.includes(searchText)).map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/user/${user.id}`} state={{ user, userData: admin }} className="btn btn-primary">View</Link>
      </td>
      
    </tr>
  ))}
</tbody>
      </table>
      </div>
    </div>
   </div>
  );
};

export default UserTable;