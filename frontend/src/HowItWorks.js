// frontend/src/HowItWorks.js
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const steps = [
  {
    title: '1. Browse Opportunities',
    description: 'Explore curated mortgages with transparent risk and return data.',
  },
  {
    title: '2. Invest & Fund',
    description: 'Start from $100; fund fractions or full loans securely.',
  },
  {
    title: '3. Earn Returns',
    description: 'Receive monthly repayments and track your impact.',
  },
];

function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ py: 8, backgroundColor: '#f7f9fc' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          A New Way to Invest in Real Estate
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Three simple steps to start building your global portfolio.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {/* First two items */}
          {steps.slice(0, 2).map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#e0f7fa', margin: '0 auto 16px' }} />
                <Typography variant="h6" component="h3" gutterBottom>{step.title}</Typography>
                <Typography color="text.secondary">{step.description}</Typography>
              </Box>
            </Grid>
          ))}

          {/* Empty Spacer Grid Item on medium screens and up */}
          <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }} />

          {/* Third Item */}
          <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#e0f7fa', margin: '0 auto 16px' }} />
                <Typography variant="h6" component="h3" gutterBottom>{steps[2].title}</Typography>
                <Typography color="text.secondary">{steps[2].description}</Typography>
              </Box>
          </Grid>
          
          {/* Another Empty Spacer */}
          <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Grid>
      </Container>
    </Box>
  );
}

export default HowItWorks;