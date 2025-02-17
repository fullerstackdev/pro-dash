// src/layout/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type NavbarProps = {
  onToggleSidebar?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'background.paper', boxShadow: 2 }}>
      <Toolbar>
        {/* Toggle sidebar (mobile) */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={onToggleSidebar}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand or Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pro-Dash
        </Typography>

        {/* Right side */}
        {isAuthenticated ? (
          <Box>
            <Button color="inherit" onClick={() => navigate('/account/edit')} sx={{ mr: 2 }}>
              Profile
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box>
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
