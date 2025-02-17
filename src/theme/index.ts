// src/theme/index.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#03c9d7', // A teal accent
    },
    secondary: {
      main: '#fb9678', // An orange accent
    },
    background: {
      default: '#0B132B', // overall page background
      paper: '#1E1E2D',   // card backgrounds, etc.
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0', // or a lighter gray
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    // You can override default sizes or weights if desired
  },
  // If you want to override component defaults, you can do so here:
  components: {
    // Example:
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E2D',
        },
      },
    },
  },
});

export default theme;
