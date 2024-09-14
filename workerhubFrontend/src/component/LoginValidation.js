
const validation = ({ email, password }) => {
    const errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{4,}$/;
  
    // Email validation
    if (!email) {
      errors.email = "Email is required.";
    } else if (! email_pattern.test(email)) {
      errors.email = "Email address is invalid.";
    }
  
    // Password validation
    if (!password) {
      errors.password = "Password is required.";
    }
  
    return errors;
  };

  
  export default validation;
  