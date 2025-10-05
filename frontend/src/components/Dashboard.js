import React from 'react';
import { Grid, Paper, Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Chip, TableContainer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'; // Import AreaChart and Area
import StatCard from './StatCard';
import PortfolioAllocationChart from './PortfolioAllocationChart';

const performanceData = [
  { name: 'Jan', value: 10000 }, { name: 'Feb', value: 10200 }, { name: 'Mar', value: 10500 },
  { name: 'Apr', value: 10800 }, { name: 'May', value: 11200 }, { name: 'Jun', value: 11500 },
  { name: 'Jul', value: 11800 }, { name: 'Aug', value: 12100 }, { name: 'Sep', value: 12450 },
];

const activeInvestments = [
    { property: 'Nairobi, Kenya', investment: '$2,500.00', apr: '9.5%', status: 'On-time', nextPayment: 'Oct 1, 2025' },
    { property: 'Ho Chi Minh, Vietnam', investment: '$3,000.00', apr: '8.2%', status: 'On-time', nextPayment: 'Oct 5, 2025' },
    { property: 'Medellin, Colombia', investment: '$1,500.00', apr: '10.1%', status: 'Grace Period', nextPayment: 'Sep 28, 2025' },
];

export default function Dashboard() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* ROW 1: STATS */}
      <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
        <Box sx={{ width: '25%' }}><StatCard title="Portfolio Value" value="$12,450.75" subtitle="+2.5% since last month" /></Box>
        <Box sx={{ width: '25%' }}><StatCard title="Total Invested" value="$10,000.00" subtitle="Across 5 properties" /></Box>
        <Box sx={{ width: '25%' }}><StatCard title="Estimated Annual Return" value="9.8%" subtitle="Blended rate" /></Box>
        <Box sx={{ width: '25%' }}><StatCard title="Lifetime Earnings" value="$2,450.75" subtitle="Principal + Interest" /></Box>
      </Box>

      {/* ROW 2: CHARTS */}
      <Box sx={{ display: 'flex', gap: 3, mb: 7 }}>
        <Box sx={{ width: '65%' }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Portfolio Performance</Typography>
            <ResponsiveContainer width="100%" height={300}>
              {/* Changed from LineChart to AreaChart and added Area component */}
              <AreaChart data={performanceData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#00796b" fill="#b2dfdb" /> {/* Teal line, lighter teal fill */}
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Box>
        <Box sx={{ width: '35%' }}>
          <Paper sx={{ p: 2, height: '100%' }}><PortfolioAllocationChart /></Paper>
        </Box>
      </Box>
      
      {/* ROW 3: TABLE */}
      <Box>
        <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>My Active Investments</Typography>
            <TableContainer>
                <Table size={isSmDown ? 'small' : 'medium'}>
                    <TableHead><TableRow><TableCell>PROPERTY</TableCell><TableCell>MY INVESTMENT</TableCell><TableCell>EST. APR</TableCell><TableCell>STATUS</TableCell><TableCell>NEXT PAYMENT</TableCell><TableCell></TableCell></TableRow></TableHead>
                    <TableBody>
                        {activeInvestments.map((inv) => (
                            <TableRow key={inv.property} hover>
                                <TableCell>{inv.property}</TableCell><TableCell>{inv.investment}</TableCell><TableCell>{inv.apr}</TableCell>
                                <TableCell><Chip label={inv.status} color={inv.status === 'On-time' ? 'success' : 'warning'} size="small" /></TableCell>
                                <TableCell>{inv.nextPayment}</TableCell><TableCell>Details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}