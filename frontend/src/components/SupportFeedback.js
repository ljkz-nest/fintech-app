import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemText, Button, Divider, ListItemIcon } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function SupportFeedback() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Support & Feedback</Typography>
      
      {/* Main Support Actions */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <List>
          <ListItem>
            <ListItemIcon><ChatIcon /></ListItemIcon>
            <ListItemText 
              primary="Contact Support / Chatbot" 
              secondary="Get immediate help with our AI assistant or connect with an agent." 
            />
            <Button variant="contained">Start Chat</Button>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemIcon><FeedbackIcon /></ListItemIcon>
            <ListItemText 
              primary="Submit Feedback" 
              secondary="Have a suggestion or idea? We'd love to hear it." 
            />
            <Button variant="outlined">Give Feedback</Button>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemIcon><ReportProblemIcon /></ListItemIcon>
            <ListItemText 
              primary="Report an Issue / Suspicious Activity" 
              secondary="Let us know about a technical problem or a security concern." 
            />
            <Button variant="outlined">Report Issue</Button>
          </ListItem>
        </List>
      </Paper>

      {/* Data and Privacy */}
      <Paper sx={{ p: 2, mt: 3 }}>
        <Typography variant="h6" gutterBottom>Data & Privacy</Typography>
        <List>
          <ListItem>
            <ListItemIcon><FileDownloadIcon /></ListItemIcon>
            <ListItemText 
              primary="Download Account Data" 
              secondary="Request a copy of your personal data (GDPR/CCPA)." 
            />
            <Button variant="outlined">Request Data</Button>
          </ListItem>
        </List>
      </Paper>
    </Box> // <-- This closing tag was missing.
  );
}

export default SupportFeedback;