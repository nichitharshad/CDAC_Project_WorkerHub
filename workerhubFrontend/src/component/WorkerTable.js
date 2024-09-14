import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const WorkerTable = () => {
  const location = useLocation();
 
  const admin = location.state?.userData;
  const [workers, setWorkers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/user/allworkers')
      .then(response => response.data)
      .then(data => setWorkers(data));
  }, []);

  

  return (
    <div style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'730px' }}>
      <AdminNavBar />
      <div className="container"><br></br>
        <h2 style={{textAlign:'center'}}>Worker Table</h2>
        <div className="row mb-3">
          <div className="col-md-4">
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Filter by pincode" />
          </div>
          <div className="col-md-4">
            <input type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)} placeholder="Filter by service" />
          </div>
        </div>
        <div style={{ maxHeight: '520px', overflowY: 'auto' }}>
      <table className="table table-striped">
        <thead  style={{position:'sticky',zIndex:'1',top:'0'}}>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Visiting-Charge</th>
            <th>Pincode</th>
            <th>Service</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {workers.filter(worker => worker.pincode.includes(searchText) && worker.field.includes(filterText)).map(worker => (
            <tr key={worker.id}>
              <td>{worker.name}</td>
              <td>{worker.phone}</td>
              <td>{worker.vcharge}</td>
              <td>{worker.pincode}</td>
              <td>{worker.field}</td>
              <td>
                <Link to={`/worker/admin/${worker.id}`} state={{ worker, userData: admin }} className="btn btn-primary">View</Link>
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

export default WorkerTable;