import React from 'react';
import { Box, Container, Typography, Paper, Grid, Card, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const FloatingBall = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const Cricket07 = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8, pb: 8, position: 'relative' }}>
      {/* 3D Background */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars 
            radius={50}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={2}
          />
          <group position={[0, 0, 0]}>
            <FloatingBall />
          </group>
        </Canvas>
      </Box>

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
              background: 'linear-gradient(45deg, #00E5FF 30%, #7C4DFF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4
            }}
          >
            Cricket 07 - The Ultimate Cricket Game
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Card sx={{ 
                  background: 'rgba(0,229,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(0,229,255,0.2)',
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image="https://placehold.co/1200x600/00E5FF/FFFFFF/png?text=Cricket+07+Gameplay"
                    alt="Cricket 07 Gameplay"
                    sx={{ objectFit: 'cover' }}
                  />
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Card sx={{ 
                  background: 'rgba(124,77,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(124,77,255,0.2)',
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://placehold.co/800x500/7C4DFF/FFFFFF/png?text=Batting+Gameplay"
                    alt="Batting Gameplay"
                    sx={{ objectFit: 'cover' }}
                  />
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Card sx={{ 
                  background: 'rgba(124,77,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(124,77,255,0.2)',
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://placehold.co/800x500/7C4DFF/FFFFFF/png?text=Bowling+Gameplay"
                    alt="Bowling Gameplay"
                    sx={{ objectFit: 'cover' }}
                  />
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <Paper 
            elevation={3}
            sx={{ 
              p: 4,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
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
              EA Sports Cricket 07 remains one of the most beloved cricket games ever created. Even years after its release, the game continues to captivate players with its engaging gameplay and extensive modding community.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontFamily: "'Russo One', sans-serif",
                    color: '#00E5FF',
                    mt: 4
                  }}
                >
                  Key Features
                </Typography>
                <Typography 
                  variant="body1" 
                  component="div"
                  sx={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  • Realistic cricket physics and animations
                  • Multiple game modes including Test, ODI, and Twenty20
                  • Career mode with player progression
                  • Extensive team customization options
                  • Dynamic weather conditions
                  • Detailed statistics tracking
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontFamily: "'Russo One', sans-serif",
                    color: '#00E5FF',
                    mt: 4
                  }}
                >
                  Community Updates
                </Typography>
                <Typography 
                  variant="body1" 
                  component="div"
                  sx={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  • Latest roster updates for 2024
                  • HD texture packs for modern systems
                  • Enhanced stadiums and crowds
                  • New batting and bowling animations
                  • Updated team kits and equipment
                  • Improved commentary packages
                </Typography>
              </Grid>
            </Grid>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#00E5FF',
                mt: 4
              }}
            >
              Pro Tips
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              1. Master the timing: Perfect timing is crucial for both batting and bowling. Practice in the nets to get a feel for different shots and deliveries.
              
              2. Use the pitch to your advantage: Different pitch conditions affect ball behavior. Adapt your playing style accordingly.
              
              3. Field placement matters: Strategic field placement can create pressure and force mistakes from the batting team.
              
              4. Manage your bowlers: Rotate your bowlers to maintain their energy and exploit different match situations.
              
              5. Practice manual fielding: Taking control of fielders manually can save crucial runs and create run-out opportunities.
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
              Latest Patches
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              The modding community continues to support Cricket 07 with regular updates. The latest patches include:
              • Updated player faces and models
              • Enhanced ball physics
              • New stadiums from around the world
              • Improved AI behavior
              • Bug fixes and performance optimizations
              • Compatibility updates for modern systems
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
              Why It's Still Popular
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Cricket 07's enduring popularity stems from its perfect balance of accessibility and depth. The game is easy to pick up but offers enough complexity to keep players engaged for years. The active modding community ensures the game stays fresh with regular updates and improvements.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Cricket07;
