// src/layout/AdminSidebar.tsx

import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
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
        <Box sx={{ fontWeight: 'bold', color: '#ff9800' }}>Admin Menu</Box>
      </Toolbar>
      <Divider sx={{ borderColor: '#444' }} />

      <List>
        <ListItemButton component={NavLink} to="/admin/dashboard" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: '#ff9800' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/admin/customers-list" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: '#ff9800' }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/admin/manage-courses" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: '#ff9800' }}>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Courses" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/admin/invoice" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: '#ff9800' }}>
            <ReceiptLongIcon />
          </ListItemIcon>
          <ListItemText primary="Invoice" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/admin/support-tickets" sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: '#ff9800' }}>
            <ConfirmationNumberIcon />
          </ListItemIcon>
          <ListItemText primary="Support Tickets" />
        </ListItemButton>
      </List>

      <Divider sx={{ borderColor: '#444' }} />

      <List>
        <ListItemButton sx={{ color: '#fff' }}>
          <ListItemIcon sx={{ color: '#ff9800' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default AdminSidebar;
