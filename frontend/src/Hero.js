import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        backgroundImage: `url(/images/hero-background.jpg)`, // Path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        '&::before': { // This creates the dark overlay
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      }}
    >
      {/* Foreground Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Invest in Homes, Empower Families.
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
          Nest Fund opens the door for you to invest in vetted mortgage opportunities in emerging markets. Earn competitive returns while making a tangible difference.
        </Typography>
        <Button variant="contained" size="large" sx={{ backgroundColor: '#fff', color: '#333', '&:hover': { backgroundColor: '#eee' } }}>
          Explore Investments
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;