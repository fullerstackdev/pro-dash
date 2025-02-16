// src/layout/Sidebar.tsx

import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Theme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleNav = (path: string) => {
    navigate(path);
    if (!isDesktop) {
      onClose();
    }
  };

  const drawerContent = (
    <Box sx={{ width: 240, mt: 2 }}>
      {/* STUDENT */}
      <Accordion expanded={expanded === 'student'} onChange={handleAccordionChange('student')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Student</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <List>
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
          </List>
        </AccordionDetails>
      </Accordion>

      {/* ADMIN */}
      <Accordion expanded={expanded === 'admin'} onChange={handleAccordionChange('admin')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Admin</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <List>
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
          </List>
        </AccordionDetails>
      </Accordion>

      {/* APPS */}
      <Accordion expanded={expanded === 'apps'} onChange={handleAccordionChange('apps')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Apps</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <List>
            <ListItemButton onClick={() => handleNav('/apps/chat')}>
              <ListItemText primary="Chat" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNav('/apps/calendar')}>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  if (isDesktop) {
    // Permanent drawer on desktop
    return (
      <Drawer variant="permanent" open anchor="left" sx={{ width: 240 }}>
        {drawerContent}
      </Drawer>
    );
  }

  // Temporary drawer on mobile
  return (
    <Drawer open={isOpen} onClose={onClose} anchor="left">
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;
