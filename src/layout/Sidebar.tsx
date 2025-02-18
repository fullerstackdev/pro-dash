// v1.3 - Sidebar.tsx
import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  useMediaQuery,
  Theme,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  // Collapsible states
  const [openStudent, setOpenStudent] = useState(true);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openApps, setOpenApps] = useState(false);

  const handleToggle = (panel: 'student' | 'admin' | 'apps') => {
    if (panel === 'student') setOpenStudent((prev) => !prev);
    if (panel === 'admin') setOpenAdmin((prev) => !prev);
    if (panel === 'apps') setOpenApps((prev) => !prev);
  };

  const handleNav = (path: string) => {
    navigate(path);
    if (!isDesktop) onClose();
  };

  const drawerContent = (
    <Box sx={{ width: 240, bgcolor: 'background.paper', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Brand */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>A</Avatar>
        <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
          Athlio
        </Typography>
      </Box>

      {/* User Info */}
      <Box sx={{ px: 2, pb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccountCircleIcon sx={{ color: 'primary.main' }} />
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          Hello, John Doe
        </Typography>
      </Box>
      <Divider />

      {/* Navigation Sections */}
      <List disablePadding sx={{ flexGrow: 1 }}>
        {/* Student */}
        <ListItemButton onClick={() => handleToggle('student')}>
          <ListItemText primary="Student" />
          {openStudent ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={openStudent} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 3 }}>
            <ListItemButton onClick={() => handleNav('/student/dashboard')}>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/courses-explore')}>
              <ListItemText primary="Courses Explore" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/courses-detail')}>
              <ListItemText primary="Courses Detail" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/transactions')}>
              <ListItemText primary="Transactions" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/bets')}>
              <ListItemText primary="Bets" />
            </ListItemButton>
          </Box>
        </Collapse>

        {/* Admin */}
        <ListItemButton onClick={() => handleToggle('admin')}>
          <ListItemText primary="Admin" />
          {openAdmin ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={openAdmin} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 3 }}>
            <ListItemButton onClick={() => handleNav('/admin/dashboard')}>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/customers-list')}>
              <ListItemText primary="Customers List" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/customers-detail')}>
              <ListItemText primary="Customers Detail" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/manage-courses')}>
              <ListItemText primary="Manage Courses" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/courses-detail')}>
              <ListItemText primary="Courses Detail" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/invoice')}>
              <ListItemText primary="Invoice" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/support-tickets')}>
              <ListItemText primary="Support Tickets" />
            </ListItemButton>
          </Box>
        </Collapse>

        {/* Apps */}
        <ListItemButton onClick={() => handleToggle('apps')}>
          <ListItemText primary="Apps" />
          {openApps ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={openApps} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 3 }}>
            <ListItemButton onClick={() => handleNav('/apps/chat')}>
              <ListItemText primary="Chat" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/apps/calendar')}>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </Box>
        </Collapse>
      </List>

      {/* Sidebar Footer / Version */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          v1.3.0
        </Typography>
      </Box>
    </Box>
  );

  if (isDesktop) {
    return (
      <Drawer variant="permanent" anchor="left" open sx={{ width: 240 }}>
        {drawerContent}
      </Drawer>
    );
  }

  // Mobile
  return (
    <Drawer open={isOpen} onClose={onClose} anchor="left" sx={{ '& .MuiDrawer-paper': { width: 240 } }}>
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;
