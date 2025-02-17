// main.tsx (or index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // import the createTheme from above

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
