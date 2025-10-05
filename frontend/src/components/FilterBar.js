import React from 'react';
import { Paper, Grid, TextField, Button, MenuItem } from '@mui/material';

function FilterBar() {
  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3}>
          <TextField select label="Region" defaultValue="All" fullWidth>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="South America">South America</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField select label="Loan Grade" defaultValue="All" fullWidth>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="A">Grade A</MenuItem>
            <MenuItem value="B">Grade B</MenuItem>
            <MenuItem value="C">Grade C</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField select label="Est. APR" defaultValue="Any" fullWidth>
            <MenuItem value="Any">Any</MenuItem>
            <MenuItem value="5-8%">5% - 8%</MenuItem>
            <MenuItem value="8-10%">8% - 10%</MenuItem>
            <MenuItem value="10%+">10%+</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" fullWidth sx={{ height: '56px' }}>
            Filter
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FilterBar;