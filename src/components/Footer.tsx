import React from 'react';
import { Box, Container, Grid, Typography, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(to top, rgba(10, 10, 31, 0.95), rgba(42, 35, 86, 0.8))'
          : 'linear-gradient(to top, rgba(248, 249, 255, 0.95), rgba(180, 124, 255, 0.2))',
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(124, 77, 255, 0.2)' : 'rgba(124, 77, 255, 0.1)'}`,
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.8rem',
                color: theme.palette.primary.main
              }}
            >
              GAMING HUB
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.9rem'
              }}
            >
              Your ultimate destination for gaming content, reviews, and entertainment.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Link 
                to="/blog" 
                style={{ textDecoration: 'none' }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontFamily: "'Orbitron', sans-serif",
                    '&:hover': {
                      color: theme.palette.primary.main
                    },
                    transition: 'color 0.3s ease-in-out'
                  }}
                >
                  Blog
                </Typography>
              </Link>
              <Link 
                to="/about" 
                style={{ textDecoration: 'none' }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontFamily: "'Orbitron', sans-serif",
                    '&:hover': {
                      color: theme.palette.primary.main
                    },
                    transition: 'color 0.3s ease-in-out'
                  }}
                >
                  About
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 4,
            color: 'text.secondary',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.8rem'
          }}
        >
          {new Date().getFullYear()} Gaming Hub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
