import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Chip } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';

// Sample data for hedges
const hedgeData = [
  {
    property: 'Nairobi, Kenya',
    exchangeRate: 'KES / USD: 129.50',
    investmentUSD: '$2,500.00',
    localValue: '323,750 KES',
    status: 'Unhedged',
  },
  {
    property: 'Ho Chi Minh, Vietnam',
    exchangeRate: 'VND / USD: 25,450.00',
    investmentUSD: '$3,000.00',
    localValue: '76,350,000 VND',
    status: 'Hedged',
  },
];

function FXHedge() {
  return (
    <Box>
      {/* Informational Card */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: '#e0f7fa' }}>
        <Typography variant="h6" gutterBottom>How FX Hedging Works on Nest Fund</Typography>
        <Typography variant="body1">
          Your investments are made in local currencies. This means your returns can be affected by currency fluctuations when converted back to USD. By activating an FX hedge, you lock in an exchange rate for a small fee, protecting your investment from potential currency downturns. This is an optional feature you can apply to individual investments.
        </Typography>
      </Paper>

      {/* Manage Your Hedges Table */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ p: 2 }}>Manage Your Hedges</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PROPERTY</TableCell>
              <TableCell>INVESTMENT (USD)</TableCell>
              <TableCell>LOCAL CURRENCY</TableCell>
              <TableCell>HEDGE STATUS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hedgeData.map((hedge) => (
              <TableRow key={hedge.property}>
                <TableCell>
                  <Typography variant="subtitle1" component="div">{hedge.property}</Typography>
                  <Typography variant="body2" color="text.secondary">{hedge.exchangeRate}</Typography>
                </TableCell>
                <TableCell>{hedge.investmentUSD}</TableCell>
                <TableCell>{hedge.localValue}</TableCell>
                <TableCell>
                  <Chip 
                    icon={hedge.status === 'Hedged' ? <LockIcon /> : <LockOpenIcon />}
                    label={hedge.status}
                    color={hedge.status === 'Hedged' ? 'success' : 'warning'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  {hedge.status === 'Hedged' ? (
                    <Button variant="outlined" disabled>Manage</Button>
                  ) : (
                    <Button variant="contained" color="primary">Activate Hedge</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default FXHedge;