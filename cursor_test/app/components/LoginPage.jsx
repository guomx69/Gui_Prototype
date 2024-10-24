import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <calcite-panel heading="Login">
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <calcite-label>
            Email address
            <calcite-input
              type="email"
              value={email}
              onCalciteInputInput={(e) => setEmail(e.target.value)}
              required
            ></calcite-input>
          </calcite-label>

          <calcite-label>
            Password
            <calcite-input
              type="password"
              value={password}
              onCalciteInputInput={(e) => setPassword(e.target.value)}
              required
            ></calcite-input>
          </calcite-label>

          <calcite-button type="submit" appearance="solid" color="blue" style={{ marginTop: '20px' }}>
            Login
          </calcite-button>
        </form>
      </calcite-panel>
    </div>
  );
};

export default LoginPage;
