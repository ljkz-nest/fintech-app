// frontend/src/components/ImpactSection.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function ImpactSection() {
  return (
    <Box id="impact" sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4, 
          alignItems: 'center' 
        }}>
          
          {/* Left Column: Image */}
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src="/images/happy-family.jpg"
              alt="Happy Family"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Box>

          {/* Right Column: Text */}
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography variant="overline" color="primary.main" sx={{ display: 'block', mb: 1, fontWeight: 'bold' }}>
              Invest with Purpose
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Your Investment is a Foundation
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Beyond financial returns, your investment provides families with a stable home—a foundation
              for better health, education, and economic opportunity. Every dollar you invest contributes to
              breaking the cycle of poverty and building stronger communities.
            </Typography>

            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>3,000+</Typography>
                <Typography variant="subtitle2" color="text.secondary">Families Housed</Typography>
              </Box>
              <Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>$50M+</Typography>
                <Typography variant="subtitle2" color="text.secondary">Capital Deployed</Typography>
              </Box>
              <Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>12</Typography>
                <Typography variant="subtitle2" color="text.secondary">Countries</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ImpactSection;