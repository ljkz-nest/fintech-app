import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

function Navbar({ onLoginClick }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 1 }}>
      <Toolbar 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}
      >
        
        {/* Left Section (Column 1) */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifySelf: 'start' }}>
          <img src="/images/logo.jpg" alt="Nest Fund Logo" style={{ height: '100px' }} />
        </Box>

        {/* Center Section (Column 2) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, justifySelf: 'center' }}>
          <Link to="opportunities" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#555' }}>
            Opportunities
          </Link>
          <Link to="how-it-works" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#555' }}>
            How It Works
          </Link>
          <Link to="impact" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#555' }}>
            Our Impact
          </Link>
          <Link to="about-us" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#555' }}>
            About Us
          </Link>
        </Box>

        {/* Right Section (Column 3) */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, justifySelf: 'end' }}>
          <Button onClick={onLoginClick} variant="text" sx={{ color: '#555' }}>
            Log In
          </Button>
          <Button 
            variant="contained" 
            color="primary"
          >
            Sign Up
          </Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;