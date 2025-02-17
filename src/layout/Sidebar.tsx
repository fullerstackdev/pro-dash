// src/layout/Sidebar.tsx
import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useMediaQuery,
  Theme,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  // For collapsible submenus, we can track expanded sections in state:
  const [openStudent, setOpenStudent] = React.useState(false);
  const [openAdmin, setOpenAdmin] = React.useState(false);
  const [openApps, setOpenApps] = React.useState(false);

  const handleNav = (path: string) => {
    navigate(path);
    if (!isDesktop) onClose();
  };

  const drawerContent = (
    <Box sx={{ width: 240, bgcolor: 'background.paper', height: '100%' }}>
      <List component="nav" sx={{ pt: 2 }}>
        {/* STUDENT */}
        <ListItemButton onClick={() => setOpenStudent(!openStudent)}>
          <ListItemIcon>
            <SchoolIcon sx={{ color: 'primary.main' }} />
          </ListItemIcon>
          <ListItemText primary="Student" />
          {openStudent ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={openStudent} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton onClick={() => handleNav('/student/dashboard')}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/courses-explore')}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Courses Explore" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/courses-detail')}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Courses Detail" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/transactions')}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Transactions" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/student/bets')}>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary="Bets" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* ADMIN */}
        <ListItemButton onClick={() => setOpenAdmin(!openAdmin)}>
          <ListItemIcon>
            <AdminPanelSettingsIcon sx={{ color: 'primary.main' }} />
          </ListItemIcon>
          <ListItemText primary="Admin" />
          {openAdmin ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={openAdmin} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton onClick={() => handleNav('/admin/dashboard')}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/customers-list')}>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Customers List" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/customers-detail')}>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Customers Detail" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/manage-courses')}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Courses" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/courses-detail')}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Courses Detail" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/invoice')}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Invoice" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/admin/support-tickets')}>
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText primary="Support Tickets" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* APPS */}
        <ListItemButton onClick={() => setOpenApps(!openApps)}>
          <ListItemIcon>
            <ChatIcon sx={{ color: 'primary.main' }} />
          </ListItemIcon>
          <ListItemText primary="Apps" />
          {openApps ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>
        <Collapse in={openApps} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton onClick={() => handleNav('/apps/chat')}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/apps/calendar')}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  if (isDesktop) {
    return (
      <Drawer
        variant="permanent"
        open
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', bgcolor: 'background.paper' },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      onClose={onClose}
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', bgcolor: 'background.paper' },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;
