import React, { useState } from 'react';
import { Container, Form, Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css'; // We'll create this file for custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="login-container d-flex align-items-center justify-content-center">
      <Card className="login-card">
        <Card.Body>
          <div className="text-center mb-4">
            <Image src="/path/to/your/logo.png" alt="Logo" className="login-logo" />
          </div>
          <h2 className="text-center mb-4">Login to Your Account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
              <Form.Control 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FontAwesomeIcon icon={faEnvelope} className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
            </Form.Group>

            <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
              <Form.Control 
                type={showPassword ? "text" : "password"}
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon 
                icon={showPassword ? faEyeSlash : faEye} 
                className="position-absolute top-50 translate-middle-y end-0 me-3 text-muted"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#forgot-password" className="forgot-password">Forgot password?</a>
            </div>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign In
            </Button>
          </Form>
          <div className="text-center">
            <span>Don't have an account? </span>
            <a href="signup">Sign up</a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
