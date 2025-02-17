// src/layout/MainLayout.tsx

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { isAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If you prefer to show a placeholder or redirect if not logged in:
  if (!isAuthenticated) {
    return null; // or <Navigate to="/login" />, etc.
  }

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="background.default">
      {/* Top Navbar */}
      <Navbar onToggleSidebar={handleToggleSidebar} />

      {/* Sidebar Drawer */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <Box component="main" sx={{ flex: 1, ml: { md: '240px' }, p: 2 }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default MainLayout;
