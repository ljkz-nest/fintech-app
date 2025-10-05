import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

function OpportunityCard({ opportunity, isSelected, onClick }) {
  const { title, image, location, grade, apr } = opportunity;

  return (
    <Card 
      onClick={onClick} 
      sx={{ 
        cursor: 'pointer',
        border: isSelected ? '2px solid' : '2px solid transparent',
        borderColor: isSelected ? 'primary.main' : 'transparent',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold' }}>
            {grade}
          </Typography>
        </Box>
        <Typography variant="h5" component="p" sx={{ fontWeight: 'bold', mt: 1, color: 'primary.main' }}>
          {apr}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Est. APR
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OpportunityCard;