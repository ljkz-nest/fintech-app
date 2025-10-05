import React from 'react';
import { Typography, Box, Paper, FormGroup, FormControlLabel, Switch, Divider } from '@mui/material';

function ProfilePreferences() {
  // Sample data - in a real app, this would be managed with state
  const preferences = {
    theme: 'light',
    emailUpdates: true,
    emailPayouts: true,
    emailNews: false,
    smsNotifications: true,
    marketingOptIn: true,
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Profile & Preferences</Typography>

      {/* Display Settings */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Dashboard Theme</Typography>
        <FormGroup>
          <FormControlLabel 
            control={<Switch checked={preferences.theme === 'dark'} />} 
            label="Dark Mode" 
          />
        </FormGroup>
      </Paper>

      {/* Email Notifications */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Email Notification Preferences</Typography>
        <FormGroup>
          <FormControlLabel 
            control={<Switch checked={preferences.emailUpdates} />} 
            label="Investment Updates" 
          />
          <FormControlLabel 
            control={<Switch checked={preferences.emailPayouts} />} 
            label="Payouts" 
          />
          <FormControlLabel 
            control={<Switch checked={preferences.emailNews} />} 
            label="Product News & Announcements" 
          />
        </FormGroup>
      </Paper>

      {/* Other Notifications */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Other Notifications</Typography>
        <FormGroup>
          <FormControlLabel 
            control={<Switch checked={preferences.smsNotifications} />} 
            label="SMS / Push Notifications" 
          />
        </FormGroup>
      </Paper>

      {/* Marketing Preferences */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Marketing Preferences</Typography>
        <FormGroup>
          <FormControlLabel 
            control={<Switch checked={preferences.marketingOptIn} />} 
            label="Opt-in to marketing communications" 
          />
        </FormGroup>
      </Paper>
    </Box>
  );
}

export default ProfilePreferences;