// src/layout/Navbar.tsx (v1.3)
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type NavbarProps = {
  onToggleSidebar?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Dummy user menu anchor
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="inherit" sx={{ backgroundColor: 'background.paper' }}>
      <Toolbar>
        {/* Mobile toggle button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={onToggleSidebar}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand/Logo on the left */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Athlio
        </Typography>

        {/* Spacer to push the rest to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Search bar on the right */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
          <TextField
            size="small"
            placeholder="Search..."
            sx={{ bgcolor: 'background.default', mr: 2, width: 220 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />
          {/* Notification icon */}
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <NotificationsNoneIcon sx={{ color: 'text.secondary' }} />
          </IconButton>
        </Box>

        {/* If not authenticated, show a login button; else show user avatar */}
        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Avatar + drop-down */}
            <IconButton onClick={handleUserMenuOpen} sx={{ p: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  sx={{ bgcolor: 'secondary.main', width: 32, height: 32, mr: 1 }}
                  alt="User"
                >
                  {user?.name?.[0] ?? 'U'}
                </Avatar>
                <ArrowDropDownIcon sx={{ color: 'text.secondary' }} />
              </Box>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
              sx={{ mt: 4 }}
            >
              <MenuItem onClick={() => navigate('/account/edit')}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button
            color="inherit"
            onClick={() => navigate('/login')}
            sx={{ color: 'text.secondary', textTransform: 'none' }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
