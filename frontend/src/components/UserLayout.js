import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import BrowseOpportunities from './BrowseOpportunities';
import FXHedge from './FXHedge';
import AccountSettings from './AccountSettings';
import SupportFeedback from './SupportFeedback'; // <-- Import the new page
import Header from './Header';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Button, Grid } from '@mui/material'; // Added Grid

import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport'; // <-- Import new icon

function UserLayout({ mortgages, onLogout }) {
  const [title, setTitle] = useState('Dashboard');

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Box
          component="nav"
          sx={{
            width: 240,
            flexShrink: 0,
            bgcolor: 'background.paper',
            height: '100vh',
            borderRight: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Nest Fund
              </Typography>
            </Box>
            <List>
              <ListItem disablePadding component={RouterLink} to="/"><ListItemButton onClick={() => setTitle('Dashboard')}><ListItemIcon><DashboardIcon /></ListItemIcon><ListItemText primary="Dashboard" /></ListItemButton></ListItem>
              <ListItem disablePadding component={RouterLink} to="/browse"><ListItemButton onClick={() => setTitle('Browse Opportunities')}><ListItemIcon><SearchIcon /></ListItemIcon><ListItemText primary="Browse Opportunities" /></ListItemButton></ListItem>
              <ListItem disablePadding component={RouterLink} to="/fx-hedge"><ListItemButton onClick={() => setTitle('FX Hedge')}><ListItemIcon><MonetizationOnIcon /></ListItemIcon><ListItemText primary="FX Hedge" /></ListItemButton></ListItem>
                {/* Corrected Link Below */}
              <ListItem disablePadding component={RouterLink} to="/settings">
               <ListItemButton onClick={() => setTitle('Account Settings')}>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText primary="Account Settings" />
               </ListItemButton>
              </ListItem>
              {/* Add new link below */}
              <ListItem disablePadding component={RouterLink} to="/support"><ListItemButton onClick={() => setTitle('Support & Feedback')}><ListItemIcon><ContactSupportIcon /></ListItemIcon><ListItemText primary="Support & Feedback" /></ListItemButton></ListItem>
            </List>
          </Box>
          <Box sx={{ p: 2, marginTop: 'auto' }}>
            <Button variant="contained" onClick={onLogout} fullWidth>Logout</Button>
          </Box>
        </Box>

        {/* Main Content Area */}
        <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f4f6f8' }}>
          <Header title={title} />
          <Box sx={{ p: 3 }}>
            <Routes>
              <Route path="/" element={<Dashboard mortgages={mortgages} />} />
              <Route path="/browse" element={<BrowseOpportunities />} />
              <Route path="/fx-hedge" element={<FXHedge />} />
              <Route path="/settings/*" element={<AccountSettings />} />
              <Route path="/support" element={<SupportFeedback />} /> {/* <-- Add new route here */}
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default UserLayout;