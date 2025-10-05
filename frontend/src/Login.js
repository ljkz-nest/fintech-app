import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Use the environment variable for the URL
      const apiUrl = process.env.REACT_APP_API_URL
      const response = await axios.post(`${apiUrl}/api/auth/token/login/`, {
        username: username,
        password: password
      });
      // If login is successful, you get a token
      if (response.data.auth_token) {
        setToken(response.data.auth_token);
        localStorage.setItem('token', response.data.auth_token); // Store token
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
