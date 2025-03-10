import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(10, 10, 31, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(124, 77, 255, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                mr: 4,
                fontFamily: "'Press Start 2P', cursive",
                fontSize: { xs: '0.8rem', md: '1rem' },
                color: '#00E5FF',
                textDecoration: 'none',
                background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                '&:hover': {
                  textShadow: '0 0 8px rgba(124, 77, 255, 0.5)',
                },
              }}
            >
              GAMING HUB
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            {[
              { text: 'Home', path: '/' },
              { text: 'Blog', path: '/blog' },
              { text: 'About', path: '/about' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.7rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                    '&:hover': {
                      background: 'transparent',
                      color: '#00E5FF',
                    },
                  }}
                >
                  {item.text}
                </Button>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { icon: <GitHubIcon />, url: 'https://github.com' },
              { icon: <TwitterIcon />, url: 'https://twitter.com' },
              { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
            ].map((social, index) => (
              <motion.div
                key={social.url}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: '#00E5FF',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
