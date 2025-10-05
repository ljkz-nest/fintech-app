import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function PaymentMethods() {
  // Sample data
  const bankAccounts = [
    { id: 1, name: 'Bank of America Checking', last4: '...1234' },
  ];
  const cards = [
    { id: 1, name: 'Visa', last4: '...5678' },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Payment & Payout Methods</Typography>

      {/* Linked Bank Accounts */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Linked Bank Accounts</Typography>
        <List>
          {bankAccounts.map(acc => (
            <ListItem key={acc.id}>
              <AccountBalanceIcon sx={{ mr: 2 }} />
              <ListItemText primary={acc.name} secondary={acc.last4} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button variant="outlined" sx={{ mt: 1 }}>Add Bank Account</Button>
      </Paper>

      {/* Linked Cards */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Linked Cards</Typography>
        <List>
          {cards.map(card => (
            <ListItem key={card.id}>
              <CreditCardIcon sx={{ mr: 2 }} />
              <ListItemText primary={card.name} secondary={card.last4} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button variant="outlined" sx={{ mt: 1 }}>Add Card</Button>
      </Paper>

      {/* Other Settings */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Preferences</Typography>
        <ListItem>
          <ListItemText primary="Withdrawal Preferences" secondary="Auto-reinvestment" />
          <Button>Change</Button>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Preferred Payout Currency" secondary="USD" />
          <Button>Change</Button>
        </ListItem>
      </Paper>

      <Button variant="contained" color="primary">View Transaction History</Button>
    </Box>
  );
}

export default PaymentMethods;