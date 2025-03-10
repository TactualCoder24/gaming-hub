import { createTheme, Theme, ThemeOptions, Components } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import { useState, useMemo } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Palette {
    neutral?: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: "'Press Start 2P', cursive",
        textTransform: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(124, 77, 255, 0.25)',
        },
      },
    },
    defaultProps: {
      disableRipple: true,
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
};

const baseTheme: ThemeOptions = {
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
  components,
};

const lightPalette = {
  mode: 'light' as const,
  primary: {
    main: '#7C4DFF',
    light: '#B47CFF',
    dark: '#5C35CC',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#00E5FF',
    light: '#6EFFFF',
    dark: '#00B2CC',
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
};

const darkPalette = {
  mode: 'dark' as const,
  primary: {
    main: '#B47CFF',
    light: '#D4A6FF',
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
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: lightPalette,
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: darkPalette,
});

export interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const useTheme = (): UseThemeReturn => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = useMemo(() => isDarkMode ? darkTheme : lightTheme, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { theme, toggleTheme, isDarkMode };
};
