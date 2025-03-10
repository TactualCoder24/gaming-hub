import { createTheme, ThemeOptions } from '@mui/material/styles';

// Common theme settings
const commonSettings: ThemeOptions = {
  typography: {
    fontFamily: "'Orbitron', sans-serif",
    h1: {
      fontFamily: "'Press Start 2P', cursive",
    },
    h2: {
      fontFamily: "'Press Start 2P', cursive",
    },
    h3: {
      fontFamily: "'Press Start 2P', cursive",
    },
    h4: {
      fontFamily: "'Press Start 2P', cursive",
    },
    h5: {
      fontFamily: "'Russo One', sans-serif",
    },
    h6: {
      fontFamily: "'Russo One', sans-serif",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '0.8rem',
          borderRadius: 8,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 20px ${theme.palette.primary.main}33`,
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
};

// Light theme
export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: {
      main: '#7C4DFF',
      light: '#B47CFF',
      dark: '#5C35CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00E5FF',
      light: '#6EFFFF',
      dark: '#00B8CC',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F9FF',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    text: {
      primary: '#2A2356',
      secondary: 'rgba(42, 35, 86, 0.7)',
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#B47CFF',
      light: '#D4B3FF',
      dark: '#7C4DFF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6EFFFF',
      light: '#A1FFFF',
      dark: '#00E5FF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0A0A1F',
      paper: 'rgba(10, 10, 31, 0.9)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
});
