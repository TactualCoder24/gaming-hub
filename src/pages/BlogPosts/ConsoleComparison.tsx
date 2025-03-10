import React from 'react';
import { Box, Container, Typography, Paper, Grid, Card, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const FloatingConsole = ({ color }: { color: string }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh>
        <boxGeometry args={[2, 1, 0.5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const ConsoleComparison = () => {
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
          <group position={[-2, 0, 0]}>
            <FloatingConsole color="#FF1744" /> {/* PS5 */}
          </group>
          <group position={[2, 0, 0]}>
            <FloatingConsole color="#00E5FF" /> {/* Xbox */}
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
              background: 'linear-gradient(45deg, #FF1744 30%, #00E5FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4
            }}
          >
            PS5 vs Xbox Series X - The Ultimate Comparison
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Card sx={{ 
                  background: 'rgba(255,23,68,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,23,68,0.2)',
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://placehold.co/800x600/FF1744/FFFFFF/png?text=PlayStation+5"
                    alt="PlayStation 5"
                    sx={{ objectFit: 'cover' }}
                  />
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
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
                    height="300"
                    image="https://placehold.co/800x600/00E5FF/FFFFFF/png?text=Xbox+Series+X"
                    alt="Xbox Series X"
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
              border: '1px solid rgba(255, 23, 68, 0.2)',
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
              The battle between PlayStation 5 and Xbox Series X continues to be a hot topic among gamers. Let's break down the key differences and help you decide which console is right for you.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontFamily: "'Russo One', sans-serif",
                    color: '#FF1744',
                    mt: 4
                  }}
                >
                  PlayStation 5
                </Typography>
                <Typography 
                  variant="body1" 
                  component="div"
                  sx={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  • CPU: AMD Zen 2 (3.5GHz)
                  • GPU: 10.28 TFLOPS, 36 CUs
                  • RAM: 16GB GDDR6
                  • Storage: 825GB Custom SSD
                  • Ray Tracing: Yes
                  • 4K Resolution: Yes
                  • Price: $499 (Standard) / $399 (Digital)
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
                  Xbox Series X
                </Typography>
                <Typography 
                  variant="body1" 
                  component="div"
                  sx={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  • CPU: AMD Zen 2 (3.8GHz)
                  • GPU: 12 TFLOPS, 52 CUs
                  • RAM: 16GB GDDR6
                  • Storage: 1TB Custom SSD
                  • Ray Tracing: Yes
                  • 4K Resolution: Yes
                  • Price: $499
                </Typography>
              </Grid>
            </Grid>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#7C4DFF',
                mt: 4
              }}
            >
              Performance
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Both consoles deliver exceptional performance with 4K gaming, ray tracing, and fast load times. The Xbox Series X has a slight edge in raw power, but the PS5's custom SSD offers faster load times in many cases. In real-world gaming, the difference is minimal, and both provide an excellent experience.
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#7C4DFF',
                mt: 4
              }}
            >
              Exclusive Games
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              PlayStation 5:
              • Spider-Man 2
              • God of War Ragnarök
              • Horizon Forbidden West
              • Demon's Souls
              • Final Fantasy XVI

              Xbox Series X:
              • Starfield
              • Forza Motorsport
              • Halo Infinite
              • Microsoft Flight Simulator
              • Fable (upcoming)
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#7C4DFF',
                mt: 4
              }}
            >
              Additional Features
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              PS5:
              • DualSense controller with haptic feedback
              • 3D Audio
              • PlayStation VR2 compatibility
              • PlayStation Plus subscription service

              Xbox Series X:
              • Quick Resume for multiple games
              • Xbox Game Pass subscription
              • Smart Delivery
              • Backward compatibility with older games
            </Typography>

            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontFamily: "'Russo One', sans-serif",
                color: '#7C4DFF',
                mt: 4
              }}
            >
              Verdict
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Both consoles are excellent choices with their own strengths. Choose PS5 if you prefer Sony's exclusive games and innovative controller features. Go for Xbox Series X if you want Game Pass, better backward compatibility, and slightly more powerful hardware. Consider which exclusive games appeal to you most and which additional features matter more for your gaming style.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ConsoleComparison;
