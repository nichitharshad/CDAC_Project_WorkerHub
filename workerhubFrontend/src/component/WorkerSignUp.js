import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validateWorkerSignup from './WorkerSignupValidation';

const WorkerSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vcharge, setVisitingCharge] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [field, setField] = useState('');
  const [exp, setExp] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const validationErrors = validateWorkerSignup({
      email, password, confirmPassword, name, phone,vcharge, address, pincode, field,exp
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const signUpData = {
      email,
      password,
      name,
      phone,
      vcharge,
      address,
      pincode,
      field,exp
    };

    try {
        const response = await axios.post("http://localhost:8080/worker/add", signUpData, {
            headers: { 'Content-Type': 'application/json' }
          });

      alert("Signup Successful ! please login to continue.");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrors({ email: 'Email is already exist.' });
      }else{
      console.error(error);
      alert('Error signing up. Please try again.');
      }
    }
  };

  const handleLoginpage = () => navigate('/');

  return (  
  <div className="d-flex justify-content-center align-items-center vh-100"  
    style={{ backgroundImage: 'url(/login3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className="p-4 rounded-3 w-35" style={{ backgroundColor: 'whitesmoke', height: '700px' }}>
        <h2 className="text-center">Worker Sign Up</h2>
        <form onSubmit={handleSignUp} className="form-horizontal">
            <table className="table">
                <tbody>
                    <tr>
                        <td><label>Email:</label></td>
                        <td>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder='Enter Email'
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Password:</label></td>
                        <td>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder='Enter Password'
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Confirm Password:</label></td>
                        <td>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control"
                                placeholder='Enter Confirm Password'
                            />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Name:</label></td>
                        <td>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder='Enter Name'
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Phone:</label></td>
                        <td>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                placeholder='Enter Phone'
                            />
                            {errors.phone && <div className="text-danger">{errors.phone}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Visiting Charge:</label></td>
                        <td>
                            <input
                                type="tel"
                                value={vcharge}
                                onChange={(e) => setVisitingCharge(e.target.value)}
                                className="form-control"
                                placeholder='Enter Visiting Charge'
                            />
                            {errors.vcharge && <div className="text-danger">{errors.vcharge}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Address:</label></td>
                        <td>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                placeholder='Enter Address'
                            />
                            {errors.address && <div className="text-danger">{errors.address}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Pincode:</label></td>
                        <td>
                            <input
                                type="text"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                className="form-control"
                                placeholder='Enter Pincode'
                            />
                            {errors.pincode && <div className="text-danger">{errors.pincode}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Experience:</label></td>
                        <td>
                            <input
                                type="text"
                                value={exp}
                                onChange={(e) => setExp(e.target.value)}
                                className="form-control"
                                placeholder='Enter Experience'
                            />
                            {errors.exp && <div className="text-danger">{errors.exp}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Services:</label></td>
                        <td>
                            <select value={field} onChange={(e) => setField(e.target.value)} className="form-control">
                                <option value="">Select a Service</option>
                                <option value="HOUSE_KEEPING">HOUSE_KEEPING</option>
                                <option value="PLUMBER">PLUMBER</option>
                                <option value="ELECTRICIAN">ELECTRICIAN</option>
                                <option value="ELECTRONICS">ELECTRONICS</option>
                                <option value="DRIVER">DRIVER</option>
                                <option value="COOK">COOK</option>
                                <option value="MECHANIC">MECHANIC</option>
                                <option value="BABYSITTER">BABYSITTER</option>
                                <option value="PAINTER">PAINTER</option>
                                <option value="CARPENTER">CARPENTER</option>
                                <option value="LABOUR">LABOUR</option>
                                <option value="GARDENER">GARDENER</option>
                                <option value="PRIEST">PRIEST</option>
                                <option value="PESTCONTROL">PESTCONTROL</option>
                                <option value="SECURITY_GUARD">SECURITY_GUARD</option>
                                <option value="TRANSPORT">TRANSPORT</option>
                            </select>
                            {errors.field && <div className="text-danger">{errors.field}</div>}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">Sign Up</button>&nbsp;
                <button type="button" className="btn btn-secondary" onClick={handleLoginpage}>Login</button>
            </div>
        </form>
    </div>
</div>

  );
};

export default WorkerSignUp