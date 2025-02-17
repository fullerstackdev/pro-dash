// src/layout/MainLayout.tsx

import React from 'react';
import { useAuth } from '../context/AuthContext'; // Or however you track roles
import { Box } from '@mui/material';


/**
 * A single layout that shows either the Student sidebar/header or Admin sidebar/header
 * based on the user's role. Keeps your single-level route structure the same.
 */

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { user } = useAuth(); 
  // Suppose 'user' has { role: 'student' | 'admin' }

  if (!user) {
    // Not logged in or no role? Could show nothing or a loading screen
    return null;
  }

  const isAdmin = user.role === 'admin';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#1e1e1e' }}>
      {/* Sidebar */}
      {isAdmin ? <AdminSidebar /> : <StudentSidebar />}

      {/* Main Content & Header */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {isAdmin ? <AdminHeader /> : <StudentHeader />}

        <Box component="main" sx={{ flexGrow: 1, p: 3, color: '#fff' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
