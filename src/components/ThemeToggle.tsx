import { IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDarkMode, onToggle }: ThemeToggleProps) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 1000,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <IconButton
          onClick={onToggle}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(124, 77, 255, 0.2)',
            borderRadius: '50%',
            width: 48,
            height: 48,
            color: isDarkMode ? '#00E5FF' : '#7C4DFF',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)',
              transform: 'scale(1.1)',
              boxShadow: '0 0 20px rgba(124, 77, 255, 0.3)',
            },
          }}
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default ThemeToggle;
