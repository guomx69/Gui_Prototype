import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px'
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '16px'
    },
    input: {
      width: '100%',
      padding: '10px',
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
    forgotPassword: {
      textAlign: 'right',
      marginBottom: '16px'
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '14px'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '16px'
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none'
    },
    cancelButton: {
      backgroundColor: '#d1d5db',
      color: '#4b5563'
    },
    loginButton: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    signupText: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#6b7280'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login Here</h2>
      <form>
        <div style={styles.inputContainer}>
          <input
            type="email"
            style={styles.input}
            placeholder="Email"
          />
          <Mail style={styles.icon} size={20} />
        </div>
        <div style={styles.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            style={styles.input}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{...styles.icon, left: 'auto', right: '10px', background: 'none', border: 'none', cursor: 'pointer'}}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div style={styles.forgotPassword}>
          <a href="#forgot-password" style={styles.link}>Forgot Password?</a>
        </div>
        <div style={styles.buttonContainer}>
          <button type="button" style={{...styles.button, ...styles.cancelButton}}>Cancel</button>
          <button type="submit" style={{...styles.button, ...styles.loginButton}}>Login</button>
        </div>
        <div style={styles.signupText}>
          New user? <a href="#signup" style={styles.link}>Signup</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;