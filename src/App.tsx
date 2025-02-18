// v1.3 - App.tsx
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
    setSidebarOpen((prev) => !prev);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
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
              ml: { md: '240px' },
              p: 2,
              bgcolor: 'background.default',
            }}
          >
            <AppRoutes />
          </Box>

          {/* Footer */}
          <Footer />
        </Box>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
