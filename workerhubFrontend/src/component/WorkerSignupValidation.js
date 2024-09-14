const validateWorkerSignup = ({ email, password, confirmPassword, name, phone,vcharge, address, pincode, field,exp }) => {
    const errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{4,}$/;

  
    if (!email) {
      errors.email = 'Email is required';
    } else if (!email_pattern.test(email)) {
      errors.email = 'Email is invalid';
    }
  
    if (!password) {
      errors.password = 'Password is required';
    } else if(!password_pattern.test(password)) 
    { 
      errors.password = "Password Must contain lower and upper case and digit"
    } 
  
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    if (!name) {
      errors.name = 'Name is required';
    }
  
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!vcharge) {
      errors.name = 'Visiting-Charge is required';
    }
  
    if (!address) {
      errors.address = 'Address is required';
    }
  
    if (!pincode) {
      errors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = 'Pincode must be 6 digits';
    }
  
    if (!field) {
      errors.field = 'Field is required';
    }

    if (!exp) {
      errors.field = 'Experience is required';
    }
  
    return errors;
  };
  
  export default validateWorkerSignup;
  