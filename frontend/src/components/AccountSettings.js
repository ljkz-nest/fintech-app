import React from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Paper, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import AccountInformation from './AccountInformation';
import PaymentMethods from './PaymentMethods';
import SecuritySettings from './SecuritySettings';
import ProfilePreferences from './ProfilePreferences';

function AccountSettings() {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      {/* Sub-navigation Menu */}
      <Paper sx={{ width: 250, flexShrink: 0, p: 2 }}>
        <List>
          <ListItem disablePadding component={RouterLink} to="/settings">
            <ListItemButton><ListItemText primary="Account Information" /></ListItemButton>
          </ListItem>
          <ListItem disablePadding component={RouterLink} to="/settings/payment">
            <ListItemButton><ListItemText primary="Payment & Payouts" /></ListItemButton>
          </ListItem>
          <ListItem disablePadding component={RouterLink} to="/settings/security">
            <ListItemButton><ListItemText primary="Security Settings" /></ListItemButton>
          </ListItem>
          <ListItem disablePadding component={RouterLink} to="/settings/profile">
            <ListItemButton><ListItemText primary="Profile & Preferences" /></ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* Sub-page Content Area */}
      <Paper sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<AccountInformation />} />
          <Route path="payment" element={<PaymentMethods />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="profile" element={<ProfilePreferences />} />
        </Routes>
      </Paper>
    </Box>
  );
}

export default AccountSettings;