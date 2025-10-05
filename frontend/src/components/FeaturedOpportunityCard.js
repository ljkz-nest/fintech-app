// frontend/src/components/FeaturedOpportunityCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Button, Chip } from '@mui/material';

function FeaturedOpportunityCard({ opportunity }) {
  const { title, location, grade, description, apr, loanAmount, term, funded } = opportunity;
  const fundedPercentage = (funded / loanAmount) * 100;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: 140, backgroundColor: '#b0bec5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="div" color="white">{title}</Typography>
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="div">{location}</Typography>
          <Chip label={`Loan Grade: ${grade}`} size="small" />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{description}</Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', mb: 2 }}>
          <Box><Typography variant="h6" color="primary">{apr}</Typography><Typography variant="caption">Est. APR</Typography></Box>
          <Box><Typography variant="h6">${loanAmount.toLocaleString()}</Typography><Typography variant="caption">Loan Amount</Typography></Box>
          <Box><Typography variant="h6">{term}</Typography><Typography variant="caption">Term</Typography></Box>
        </Box>

        <LinearProgress variant="determinate" value={fundedPercentage} sx={{ height: 8, borderRadius: 5, mb: 1 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption" color="text.secondary">${funded.toLocaleString()} Funded</Typography>
          <Typography variant="caption" color="text.secondary">{100 - fundedPercentage}% Remaining</Typography>
        </Box>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" color="primary" fullWidth>View Details</Button>
      </Box>
    </Card>
  );
}

export default FeaturedOpportunityCard;