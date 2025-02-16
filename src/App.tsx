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
        <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="background.default">
          <Navbar onToggleSidebar={handleToggleSidebar} />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          <Box component="main" sx={{ flex: 1, ml: { md: '240px' }, p: 2 }}>
            <AppRoutes />
          </Box>

          <Footer />
        </Box>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
