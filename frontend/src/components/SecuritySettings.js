import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemText, Button, Divider, Switch } from '@mui/material';

function SecuritySettings() {
  // Sample data - in a real app, this would be managed with state
  const isTwoFactorEnabled = true;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Security Settings</Typography>

      {/* Password Management */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Change Password</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          For your security, we recommend choosing a strong, unique password.
        </Typography>
        <Button variant="outlined">Change Password</Button>
      </Paper>

      {/* Two-Factor Authentication */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Two-Factor Authentication (2FA)</Typography>
        <ListItem>
          <ListItemText 
            primary="Enable 2FA" 
            secondary="Add an extra layer of security to your account." 
          />
          <Switch checked={isTwoFactorEnabled} />
        </ListItem>
        <Box sx={{ pl: 2, mt: 1 }}>
          <Button disabled={!isTwoFactorEnabled}>Manage 2FA</Button>
        </Box>
      </Paper>

      {/* Activity and Sessions */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Account Activity</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Login History" secondary="Review recent logins to your account." />
            <Button>View History</Button>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Active Sessions" secondary="See where your account is currently logged in." />
            <Button>Manage Sessions</Button>
          </ListItem>
        </List>
      </Paper>

      {/* Advanced Security */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Advanced Security</Typography>
        <ListItem>
          <ListItemText primary="Passkey / Biometric Login" secondary="Enable passwordless login with your device." />
          <Button>Set Up Passkey</Button>
        </ListItem>
      </Paper>

      {/* Account Actions */}
      <Paper sx={{ p: 2, borderColor: 'error.main', borderWidth: 1, borderStyle: 'solid' }}>
        <Typography variant="h6" gutterBottom color="error">Danger Zone</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Delete Account" secondary="Permanently delete your account and all associated data." />
            <Button variant="outlined" color="error">Request Deletion</Button>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default SecuritySettings;