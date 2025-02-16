// src/layout/AdminHeader.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function AdminHeader() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1e1e1e', borderBottom: '1px solid #444' }}>
      <Toolbar>
        <SettingsIcon sx={{ color: '#ff9800', mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Admin Portal
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* Could put user profile icon, notifications, etc. on the right */}
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;
