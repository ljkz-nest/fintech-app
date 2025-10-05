import React from 'react';
import { Typography, Box, Grid, TextField, Button, MenuItem, Paper, Divider } from '@mui/material';

function AccountInformation() {
  // In a real application, this data would come from your API
  const userData = {
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '+1 234 567 8900',
    dob: '1990-01-01',
    nationality: 'USA',
    residence: 'USA',
    language: 'English',
    currency: 'USD',
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Account Information</Typography>
      <Divider sx={{ mb: 3 }} />

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          {/* Personal Details Section */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Personal Details</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Full Name" defaultValue={userData.fullName} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Date of Birth" type="date" defaultValue={userData.dob} InputLabelProps={{ shrink: true }} />
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="subtitle1" gutterBottom>Contact Information</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email Address" defaultValue={userData.email} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Phone Number" defaultValue={userData.phone} />
          </Grid>

          {/* Regional Settings Section */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="subtitle1" gutterBottom>Regional Settings</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Nationality" defaultValue={userData.nationality} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Country of Residence" defaultValue={userData.residence} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField select fullWidth label="Preferred Language" defaultValue={userData.language}>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Japanese">Japanese</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField select fullWidth label="Preferred Currency" defaultValue={userData.currency}>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="JPY">JPY</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </TextField>
          </Grid>

          {/* Save Button */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default AccountInformation;