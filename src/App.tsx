// src/App.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Outer container: takes up full viewport height, dark background from theme */}
        <Box display="flex" flexDirection="column" minHeight="100vh">
          {/* Navbar (top) */}
          <Navbar onToggleSidebar={handleToggleSidebar} />

          {/* Sidebar (left), permanent on desktop */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Main content area */}
          <Box
            component="main"
            sx={{
              flex: 1,
              // Leaves space for the sidebar on desktop:
              ml: { md: '240px' },
              p: 2,
            }}
          >
            <AppRoutes />
          </Box>

          {/* Footer at the bottom */}
          <Footer />
        </Box>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
