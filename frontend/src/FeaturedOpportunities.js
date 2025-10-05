import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
// Correct the import path to point to the components folder
import FeaturedOpportunityCard from './components/FeaturedOpportunityCard'; 

const opportunities = [
  {
    title: 'Family Home',
    location: 'Nairobi, Kenya',
    grade: 'B+',
    description: 'First-time homebuyer seeking a loan for a 3-bedroom family house.',
    apr: '9.5%',
    loanAmount: 25000,
    term: '15 yrs',
    funded: 18750,
  },
  {
    title: 'City Apartment',
    location: 'Ho Chi Minh, Vietnam',
    grade: 'A',
    description: 'Young professional looking to purchase an apartment closer to work.',
    apr: '8.2%',
    loanAmount: 40000,
    term: '20 yrs',
    funded: 16000,
  },
  {
    title: 'Rural Home',
    location: 'Medellin, Colombia',
    grade: 'B',
    description: 'Family expanding their home to accommodate their growing business.',
    apr: '10.1%',
    loanAmount: 15000,
    term: '10 yrs',
    funded: 14250,
  },
];

function FeaturedOpportunities() {
  return (
    <Box id="opportunities" sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Featured Investment Opportunities
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Hand-picked opportunities offering strong returns and social impact.
        </Typography>
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {opportunities.map((opp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeaturedOpportunityCard opportunity={opp} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturedOpportunities;