// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // <-- Import theme tools
import './index.css';
import App from './App';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#009688', // <-- This is a standard Teal color
    },
    secondary: {
      main: '#f50057', // You can define other colors too
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* <-- Wrap App in the ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);