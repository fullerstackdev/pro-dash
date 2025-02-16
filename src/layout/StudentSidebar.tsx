// src/layout/StudentSidebar.tsx

import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TimelineIcon from '@mui/icons-material/Timeline';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => {
  const drawerWidth = 240;

  return (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: '#1e1e1e',
        color: '#fff',
        borderRight: '1px solid #444',
      }}
    >
      <Toolbar>
        <Box sx={{ fontWeight: 'bold', color: 'primary.main' }}>Student Menu</Box>
      </Toolbar>
      <Divider sx={{ borderColor: '#444' }} />

      <List>
        <ListItemButton component={NavLink} to="/student/dashboard" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/student/courses-explore" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/student/bets" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText primary="Bets" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/student/transactions" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItemButton>
      </List>

      <Divider sx={{ borderColor: '#444' }} />

      <List>
        <ListItemButton sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default StudentSidebar;
