import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import React from 'react';

const FloatingConsole = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh rotation={[0.2, 0.5, 0]}>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="#B47CFF" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const GameCard = ({ title, image, description, link, category }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <Card sx={{ 
      height: '100%',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      overflow: 'hidden'
    }}>
      <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'secondary.main',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '16px',
            fontWeight: 'bold'
          }}
        >
          {category}
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography paragraph>
          {description}
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          href={link}
          fullWidth
          endIcon={<motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            →
          </motion.div>}
        >
          Play Now
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const PlayGames = () => {
  const games = [
    {
      title: 'Cricket 07',
      image: '/assets/Blog-post/cricket-07.jpg',
      description: 'Experience the best cricket simulation game with updated patches and mods. Play as your favorite teams and recreate historic matches.',
      link: '/CRICKET 07/cricket.html',
      category: 'Sports'
    },
    {
      title: 'Retro Games',
      image: '/assets/Blog-post/retro.jpg',
      description: 'Play classic retro games that bring back nostalgic memories. A curated collection of timeless classics.',
      link: '/WEBPAGES/retro.html',
      category: 'Classic'
    },
    {
      title: 'Football Games',
      image: '/assets/Blog-post/football.jpg',
      description: 'Enjoy various football games with realistic gameplay. Experience the thrill of the beautiful game.',
      link: '/WEBPAGES/football.html',
      category: 'Sports'
    },
    {
      title: 'Beta Games',
      image: '/assets/Blog-post/post-1.png',
      description: 'Try out the latest beta versions of upcoming games. Be the first to experience new features and provide feedback.',
      link: '/WEBPAGES/demo.HTML',
      category: 'Beta'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      {/* 3D Background */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars />
          <FloatingConsole />
        </Canvas>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            Play Games
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {games.map((game, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GameCard {...game} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PlayGames;
