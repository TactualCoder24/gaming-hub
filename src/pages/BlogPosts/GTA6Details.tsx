import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const GTA6Details = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontFamily: "'Press Start 2P', cursive",
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              textShadow: '0 0 20px rgba(124, 77, 255, 0.5)',
              background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4
            }}
          >
            GTA 6 - Everything We Know So Far
          </Typography>

          <Paper 
            elevation={3}
            sx={{ 
              p: 4,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(124, 77, 255, 0.2)',
              borderRadius: '16px'
            }}
          >
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}
            >
              Grand Theft Auto 6 is shaping up to be one of the most anticipated games of all time. Here's everything we know about Rockstar's next masterpiece:
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#00E5FF',
                mt: 4
              }}
            >
              Setting and Location
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              GTA 6 will be set in a modern-day Vice City, Rockstar's take on Miami. The game world is expected to be the largest and most detailed open world ever created by Rockstar Games.
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#00E5FF',
                mt: 4
              }}
            >
              Protagonists
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              For the first time in the series, GTA 6 will feature a female protagonist named Lucia, alongside a male character. This dynamic duo will bring a fresh perspective to the series.
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#00E5FF',
                mt: 4
              }}
            >
              Release Date and Platforms
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              While Rockstar has officially announced the game, the release date is expected to be in 2025. The game will launch on PS5 and Xbox Series X|S, with a PC release likely following later.
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#00E5FF',
                mt: 4
              }}
            >
              New Features
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              • Enhanced RAGE Engine with photorealistic graphics
              • Dynamic weather system with hurricanes and floods
              • Improved AI and NPC interactions
              • More interactive interiors and buildings
              • Enhanced vehicle customization
              • Advanced physics and destruction system
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#00E5FF',
                mt: 4
              }}
            >
              Story and Theme
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              The game is rumored to be inspired by Bonnie and Clyde, following the story of two characters in a modern crime drama. The narrative is expected to be more grounded and personal compared to previous entries.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GTA6Details;
