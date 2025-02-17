// src/theme/index.ts
import { createTheme } from '@mui/material/styles';

// Example color tokens from Elite Dark
const primaryMain = '#fb9678'; // Elite's “orange-ish”
const secondaryMain = '#03a9f3'; // bright teal
const backgroundDefault = '#0a2744'; // deep navy
const backgroundPaper = '#001e3c';   // dark sidebar color
const textPrimary = '#ffffff';
const textSecondary = 'rgba(255, 255, 255, 0.7)';

// Create the theme
const theme = createTheme({
  palette: {
    mode: 'dark', // ensures MUI components use “dark” surfaces
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    background: {
      default: backgroundDefault,
      paper: backgroundPaper,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    h1: { fontWeight: 600, fontSize: '2rem' },
    h2: { fontWeight: 600, fontSize: '1.75rem' },
    h3: { fontWeight: 500, fontSize: '1.5rem' },
    h4: { fontWeight: 500, fontSize: '1.25rem' },
    h5: { fontWeight: 500, fontSize: '1.1rem' },
    h6: { fontWeight: 500, fontSize: '1rem' },
    body1: { fontSize: '0.875rem' },
    body2: { fontSize: '0.8rem' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    // Example overrides for <AppBar> to mimic topbar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f2e52', // slightly different dark
          minHeight: '64px',
        },
      },
    },
    // Example overrides for <Drawer> to mimic the dark sidebar
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '220px',
          backgroundColor: backgroundPaper,
          color: textSecondary,
          borderRight: '1px solid rgba(255,255,255,0.1)',
        },
      },
    },
    // Example overrides for <Card> to match Elite’s card style
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f2e52',
          color: textPrimary,
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        },
      },
    },
    // Example overrides for <Button> - a bit more “Eliteish”
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
        containedPrimary: {
          backgroundColor: primaryMain,
          '&:hover': {
            backgroundColor: '#ec825f',
          },
        },
        outlinedPrimary: {
          color: primaryMain,
          border: `1px solid ${primaryMain}`,
          '&:hover': {
            backgroundColor: 'rgba(251,150,120,0.1)',
          },
        },
      },
    },
    // Possibly tweak <ListItem> if you want a “hover” effect on the drawer
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: textSecondary,
          '&:hover': {
            backgroundColor: '#2f3d59',
            color: textPrimary,
          },
        },
      },
    },
  },
});

export default theme;
