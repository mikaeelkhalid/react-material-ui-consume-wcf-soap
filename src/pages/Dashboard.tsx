import { Container, Typography } from '@material-ui/core';
import React from 'react';

const Dashboard = () => {
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Dashboard
      </Typography>
    </Container>
  );
};

export default Dashboard;
