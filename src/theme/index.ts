// v1.3 theme - index.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#03c9d7', // teal
    },
    secondary: {
      main: '#fb9678', // orange
    },
    background: {
      default: '#0B132B', // overall page background
      paper: '#1E1E2D',   // card backgrounds, etc.
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.95rem',
    },
    body2: {
      fontSize: '0.85rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E2D', // override default for AppBar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s',
          ':hover': {
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
});

export default theme;
