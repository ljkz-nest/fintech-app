// frontend/src/components/StatCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function StatCard({ title, value, subtitle }) {
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>{title}</Typography>
        <Typography variant="h5" component="div">{value}</Typography>
        <Typography color="text.secondary">{subtitle}</Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;