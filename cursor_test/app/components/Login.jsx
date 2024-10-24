import React, { useState } from 'react';
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-button";
import { CalcitePanel, CalciteLabel, CalciteInput, CalciteButton } from "@esri/calcite-components-react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CalcitePanel heading="Login">
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <CalciteLabel>
            Email address
            <CalciteInput
              type="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              required
            />
          </CalciteLabel>

          <CalciteLabel>
            Password
            <CalciteInput
              type="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              required
            />
          </CalciteLabel>

          <CalciteButton type="submit" width="full" style={{ marginTop: '20px' }}>
            Login
          </CalciteButton>
        </form>
      </CalcitePanel>
    </div>
  );
};

export default Login;
