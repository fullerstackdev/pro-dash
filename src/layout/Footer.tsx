// src/layout/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 2,
        mt: 'auto',
        bgcolor: 'background.paper',  // match the rest of the app
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} pro-dash. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
