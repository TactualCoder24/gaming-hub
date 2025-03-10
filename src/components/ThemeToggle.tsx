import React from 'react';
import { IconButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface ThemeToggleProps {
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 1000,
        background: theme.palette.background.paper,
        borderRadius: '50%',
        boxShadow: `0 4px 20px ${theme.palette.primary.main}33`,
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: `0 4px 25px ${theme.palette.primary.main}66`,
        },
      }}
    >
      <IconButton
        onClick={onToggle}
        color="primary"
        sx={{
          p: 1,
          '& svg': {
            transition: 'transform 0.3s ease',
            transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)',
          },
        }}
      >
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;
