import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, CardActionArea, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

const FloatingConsole = () => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={[0, -0.5, 0]}
    >
      <mesh rotation={[0.2, -0.3, 0]} scale={1.2} castShadow receiveShadow>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshPhysicalMaterial
          color="#7C4DFF"
          emissive="#B47CFF"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.2}
          reflectivity={1}
        />
      </mesh>
      <mesh position={[0, 0.2, 0]} rotation={[0.2, -0.3, 0]} scale={1.2} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.1, 1.8]} />
        <meshPhysicalMaterial
          color="#00E5FF"
          emissive="#6EFFFF"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.2}
          thickness={0.5}
        />
      </mesh>
      <group position={[-1, 0.3, 0]} rotation={[0.2, -0.3, 0]} scale={1.2}>
        <mesh castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshPhysicalMaterial
            color="#FF1744"
            emissive="#FF1744"
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>
      </group>
      <group position={[1, 0.3, 0]} rotation={[0.2, -0.3, 0]} scale={1.2}>
        <mesh castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshPhysicalMaterial
            color="#00E676"
            emissive="#00E676"
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* 3D Background */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <spotLight
            position={[0, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />
          <Stars 
            radius={50}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <group position={[0, 0, 0]}>
            <FloatingConsole />
          </group>
        </Canvas>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 4, md: 8 } }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ minHeight: '80vh' }}>
          <Grid item xs={12} md={10} textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                component="h1"
                sx={{ 
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                  mb: { xs: 2, md: 3 },
                  background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(124, 77, 255, 0.3)',
                  maxWidth: '90%',
                  mx: 'auto'
                }}
              >
                Welcome to the Ultimate Gaming Experience
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: { xs: 3, md: 4 },
                  color: 'text.secondary',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  maxWidth: '80%',
                  mx: 'auto'
                }}
              >
                Discover the latest in gaming news, reviews, and exclusive content
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  component={Link}
                  to="/blog"
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.8rem',
                    py: 2,
                    px: 4,
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #00E5FF 30%, #7C4DFF 90%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(124, 77, 255, 0.3)'
                    }
                  }}
                >
                  Read Blog
                </Button>
                <Button
                  component={Link}
                  to="/play"
                  variant="outlined"
                  sx={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.8rem',
                    py: 2,
                    px: 4,
                    borderRadius: 2,
                    borderColor: '#00E5FF',
                    color: '#00E5FF',
                    '&:hover': {
                      borderColor: '#7C4DFF',
                      color: '#7C4DFF',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0, 229, 255, 0.3)'
                    }
                  }}
                >
                  Play Games
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Welcome Section */}
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              gutterBottom
              sx={{ 
                fontFamily: "'Press Start 2P', cursive",
                fontSize: { xs: '1.5rem', sm: '2rem' },
                textAlign: 'center',
                mb: 4
              }}
            >
              Welcome to Gaming Hub
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                fontFamily: "'Orbitron', sans-serif"
              }}
            >
              Your one-stop destination for everything gaming - from the latest news to in-depth reviews, game guides, and community discussions.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h3"
                    color="primary"
                    sx={{ 
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '2rem',
                      mb: 1
                    }}
                  >
                    100+
                  </Typography>
                  <Typography sx={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Game Reviews
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h3"
                    color="secondary"
                    sx={{ 
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '2rem',
                      mb: 1
                    }}
                  >
                    50+
                  </Typography>
                  <Typography sx={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Latest News
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h3"
                    sx={{ 
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '2rem',
                      mb: 1,
                      color: '#FF1744'
                    }}
                  >
                    200+
                  </Typography>
                  <Typography sx={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Gaming Guides
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* Featured Games */}
        <Box sx={{ py: 8 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              fontFamily: "'Press Start 2P', cursive",
              fontSize: { xs: '1.5rem', sm: '2rem' },
              textAlign: 'center',
              mb: 6
            }}
          >
            Featured Games
          </Typography>
          <Grid container spacing={4}>
            {FeaturedGames.map((game, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(124,77,255,0.2)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(124,77,255,0.2)'
                      }
                    }}
                  >
                    <CardActionArea component={Link} to={game.link}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={game.image}
                        alt={game.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography 
                          gutterBottom 
                          variant="h6" 
                          sx={{ 
                            fontFamily: "'Press Start 2P', cursive",
                            fontSize: '1rem'
                          }}
                        >
                          {game.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            mb: 2,
                            fontFamily: "'Orbitron', sans-serif"
                          }}
                        >
                          {game.description}
                        </Typography>
                        <Typography 
                          variant="caption"
                          sx={{
                            display: 'inline-block',
                            px: 2,
                            py: 0.5,
                            borderRadius: '12px',
                            background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                            color: 'white',
                            fontFamily: "'Orbitron', sans-serif"
                          }}
                        >
                          {game.category}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const FeaturedGames = [
  {
    title: "GTA 6",
    image: "https://placehold.co/600x400/7C4DFF/FFFFFF/png?text=GTA+6",
    category: "Upcoming",
    description: "The most anticipated game of the decade",
    link: "/blog"
  },
  {
    title: "Cricket 07",
    image: "https://placehold.co/600x400/00E5FF/FFFFFF/png?text=Cricket+07",
    category: "Classic",
    description: "The ultimate cricket gaming experience",
    link: "/blog/cricket-07"
  },
  {
    title: "PS5 vs Xbox",
    image: "https://placehold.co/600x400/FF1744/FFFFFF/png?text=Console+Wars",
    category: "Hardware",
    description: "Ultimate console comparison",
    link: "/blog/console-comparison"
  }
];

export default Home;
