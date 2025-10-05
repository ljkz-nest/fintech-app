// frontend/src/Footer.js
import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

function Footer() {
  return (
    <Box id="about-us" sx={{ py: 6, backgroundColor: '#1d2432', color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Nest Fund</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: '#aaa' }}>
              Invest in homes, empower families.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" gutterBottom>Platform</Typography>
            <Link href="#" color="inherit" underline="hover" display="block">Opportunities</Link>
            <Link href="#" color="inherit" underline="hover" display="block">How it Works</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Sign Up</Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" gutterBottom>Company</Typography>
            <Link href="#" color="inherit" underline="hover" display="block">About Us</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Our Impact</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Contact</Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" gutterBottom>Legal</Typography>
            <Link href="#" color="inherit" underline="hover" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Terms of Service</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Risk Disclosure</Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, borderTop: 1, borderColor: 'grey.800', pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ color: '#aaa' }}>
            © 2025 Nest Fund. All rights reserved.
          </Typography>
          <Box>
            <Link href="#" color="inherit" sx={{ ml: 2 }}>Twitter</Link>
            <Link href="#" color="inherit" sx={{ ml: 2 }}>LinkedIn</Link>
            <Link href="#" color="inherit" sx={{ ml: 2 }}>Facebook</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;