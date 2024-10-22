import React, { useState } from 'react';
import { Container, Form, Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempted with:', name, email, password);
  };

  return (
    <Container className="signup-container d-flex align-items-center justify-content-center">
      <Card className="signup-card">
        <Card.Body>
          <div className="text-center mb-4">
            <Image src="/path/to/your/logo.png" alt="Logo" className="signup-logo" />
          </div>
          <h2 className="text-center mb-4">Create an Account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 position-relative" controlId="formBasicName">
              <Form.Control 
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FontAwesomeIcon icon={faUser} className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
            </Form.Group>

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
                type="password"
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon icon={faLock} className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to the Terms and Privacy Policy" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign Up
            </Button>
          </Form>
          <div className="text-center">
            <span>Already have an account? </span>
            <a href="login">Login</a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
