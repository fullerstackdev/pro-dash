// src/pages/Home.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Pro-Dash
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Your all-in-one dashboard for a seamless experience.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/login')}
        sx={{ mt: 2 }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
