import React, { useState } from 'react';
import { Eye, EyeOff, Mail } from 'lucide-react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const styles = {
    container: {
      width: '100%',
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f3f4f6',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '16px'
    },
    input: {
      width: '100%',
      padding: '12px',
      paddingLeft: '36px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '16px'
    },
    icon: {
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af'
    },
    toggleButton: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    loginText: {
      textAlign: 'center',
      marginBottom: '16px',
      color: '#6b7280'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px'
    },
    button: {
      padding: '12px 20px',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      transition: 'background-color 0.3s'
    },
    cancelButton: {
      backgroundColor: '#d1d5db',
      color: '#4b5563'
    },
    loginButton: {
      backgroundColor: '#3b82f6',
      color: 'white'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup Here</h2>
      <form>
        <div style={styles.inputContainer}>
          <input type="text" style={styles.input} placeholder="Username" />
        </div>
        <div style={styles.inputContainer}>
          <Mail style={styles.icon} size={20} />
          <input type="email" style={styles.input} placeholder="Email" />
        </div>
        <div style={styles.inputContainer}>
          <input 
            type={showPassword ? "text" : "password"} 
            style={styles.input} 
            placeholder="Password" 
          />
          <button 
            type="button" 
            style={styles.toggleButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div style={styles.inputContainer}>
          <input 
            type={showConfirmPassword ? "text" : "password"} 
            style={styles.input} 
            placeholder="Confirm Password" 
          />
          <button 
            type="button" 
            style={styles.toggleButton}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div style={styles.loginText}>
          <small>Already a user? Login</small>
        </div>
        <div style={styles.buttonContainer}>
          <button type="button" style={{...styles.button, ...styles.cancelButton}}>Cancel</button>
          <button type="submit" style={{...styles.button, ...styles.loginButton}}>Login</button>
        </div>
      </form>
    </div>
  );
};

// Add this style tag to your component or in a separate CSS file
const mobileFirstStyles = `
  @media (min-width: 768px) {
    form {
      max-width: 400px;
      margin: 0 auto;
    }
  }
`;

const StyledSignupForm = () => (
  <>
    <style>{mobileFirstStyles}</style>
    <SignupForm />
  </>
);

export default StyledSignupForm;