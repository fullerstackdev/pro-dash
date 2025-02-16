// src/layout/StudentHeader.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function StudentHeader() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1e1e1e', borderBottom: '1px solid #444' }}>
      <Toolbar>
        <PersonOutlineIcon sx={{ color: 'primary.main', mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Student Portal
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* Could put user profile icon, notifications, etc. on the right */}
      </Toolbar>
    </AppBar>
  );
}

export default StudentHeader;
