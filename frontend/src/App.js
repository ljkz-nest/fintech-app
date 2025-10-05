// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage';
import Login from './Login';
import UserLayout from './components/UserLayout'; // Import the new layout
import './App.css';

function App() {
  const [mortgages, setMortgages] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [view, setView] = useState('landing');

  useEffect(() => {
    if (token) {
      setView('dashboard');
      const fetchMortgages = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/mortgages/', {
            headers: { 'Authorization': `Token ${token}` }
          });
          setMortgages(response.data);
        } catch (error) {
          console.error("Error fetching mortgages:", error);
          if (error.response && error.response.status === 401) {
            handleLogout();
          }
        }
      };
      fetchMortgages();
    } else {
      setView('landing');
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setView('landing');
  };
  
  const showLogin = () => {
    setView('login');
  };

  if (view === 'dashboard') {
    return <UserLayout mortgages={mortgages} onLogout={handleLogout} />;
  }
  
  if (view === 'login') {
    return <Login setToken={setToken} />;
  }

  return <LandingPage onLoginClick={showLogin} />;
}

export default App;