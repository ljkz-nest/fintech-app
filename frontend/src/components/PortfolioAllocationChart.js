import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Typography, Box } from '@mui/material';

const data = [
  { name: 'Kenya', value: 400 },
  { name: 'Vietnam', value: 300 },
  { name: 'Colombia', value: 300 },
  { name: 'Philippines', value: 200 },
];

// Updated COLORS array with shades of teal
const COLORS = ['#004d40', '#00796b', '#4db6ac', '#b2dfdb'];

function PortfolioAllocationChart() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography variant="h6" gutterBottom>Portfolio Allocation</Typography>
      <Box sx={{ flexGrow: 1, width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default PortfolioAllocationChart;