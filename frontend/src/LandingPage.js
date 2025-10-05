import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FeaturedOpportunities from './FeaturedOpportunities';
import ImpactSection from './components/ImpactSection';
import Footer from './Footer';
import { Box } from '@mui/material';

function LandingPage({ onLoginClick }) {
  return (
    <Box>
      {/* This Box no longer needs a height. It will wrap its children. */}
      <Box sx={{ backgroundColor: '#1d2432' }}>
        <Navbar onLoginClick={onLoginClick} />
        <Hero />
      </Box>
      <HowItWorks />
      <FeaturedOpportunities />
      <ImpactSection />
      <Footer />
    </Box>
  );
}

export default LandingPage;