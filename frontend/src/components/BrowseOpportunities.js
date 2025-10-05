import React, { useState } from 'react';
import { Box } from '@mui/material'; // Grid is no longer needed here
import FilterBar from './FilterBar';
import OpportunityCard from './OpportunityCard';

const opportunities = [
  { id: 1, title: 'Family Home', image: '/images/family-home.jpg', location: 'ulaanbaatar, Mongolia', grade: 'B+', apr: '9.5%' },
  { id: 2, title: 'City Apartment', image: '/images/city-apartment.jpg', location: 'Kuala Lumpur, Malaysia', grade: 'A', apr: '5.0%' },
  { id: 3, title: 'Rural Home', image: '/images/rural-home.jpg' , location: 'Medellin, Colombia', grade: 'A-', apr: '8.0%'},
  { id: 4, title: 'Manila Condo', image: '/images/manila-condo.jpg' , location: 'Manila, Philippines', grade: 'A--', apr: '8.3%' },
];

function BrowseOpportunities() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Box>
      <FilterBar />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {opportunities.map((opp) => (
          <Box key={opp.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' } }}>
            <OpportunityCard 
              opportunity={opp}
              isSelected={selectedId === opp.id}
              onClick={() => setSelectedId(opp.id)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BrowseOpportunities;