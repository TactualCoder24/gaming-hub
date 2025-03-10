import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FloatingElements = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#7C4DFF"
          emissive="#B47CFF"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const blogPosts = [
  {
    title: 'GTA 6 - Everything We Know So Far',
    image: 'https://placehold.co/800x400/7C4DFF/FFFFFF/png?text=GTA+6+News',
    date: '2025',
    content: 'The highly anticipated Grand Theft Auto 6 is on the horizon. From leaked footage to official announcements, here\'s everything we know about Rockstar\'s next masterpiece.',
    link: '/blog/gta-6-details',
    category: 'News',
    color: '#7C4DFF'
  },
  {
    title: 'Cricket 07 - The Ultimate Cricket Game',
    image: 'https://placehold.co/800x400/00E5FF/FFFFFF/png?text=Cricket+07',
    date: '2025',
    content: 'Cricket 07 remains the most beloved cricket game ever made. Experience the best cricket simulation with updated patches and mods.',
    link: '/blog/cricket-07',
    category: 'Retro Gaming',
    color: '#00E5FF'
  },
  {
    title: 'PS5 vs Xbox Series X - The Ultimate Comparison',
    image: 'https://placehold.co/800x400/FF1744/FFFFFF/png?text=PS5+vs+Xbox',
    date: '2025',
    content: 'A detailed comparison between the two most powerful gaming consoles. Which one should you buy? Find out in our comprehensive review.',
    link: '/blog/console-comparison',
    category: 'Hardware',
    color: '#FF1744'
  },
  {
    title: 'Best Gaming Monitors of 2025',
    image: 'https://placehold.co/800x400/FFC107/FFFFFF/png?text=Gaming+Monitors',
    date: '2025',
    content: 'Looking for the perfect gaming monitor? Our comprehensive guide covers everything from refresh rates to response times.',
    link: '/blog/gaming-monitors-2025',
    category: 'Hardware',
    color: '#FFC107'
  },
  {
    title: 'Upcoming Games of 2025',
    image: 'https://placehold.co/800x400/FF5252/FFFFFF/png?text=Upcoming+Games',
    date: '2025',
    content: 'From epic RPGs to intense action games, 2025 is packed with exciting releases. Check out our most anticipated games list.',
    link: '/blog/upcoming-games-2025',
    category: 'News',
    color: '#FF5252'
  },
  {
    title: 'Gaming PC Build Guide 2025',
    image: 'https://placehold.co/800x400/00E676/FFFFFF/png?text=PC+Build+Guide',
    date: '2025',
    content: 'Build your dream gaming PC with our comprehensive guide. From budget builds to high-end monsters, we\'ve got you covered.',
    link: '/blog/pc-build-guide-2025',
    category: 'Hardware',
    color: '#00E676'
  }
];

const POSTS_PER_PAGE = 4;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const currentPosts = blogPosts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNextPage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', pt: 8, overflow: 'hidden' }}>
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
            <FloatingElements />
          </group>
        </Canvas>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 6,
              fontFamily: "'Press Start 2P', cursive",
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              textShadow: '0 0 20px rgba(124, 77, 255, 0.5)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #7C4DFF, #00E5FF)',
                borderRadius: '2px'
              }
            }}
          >
            Gaming Blog
          </Typography>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              mb: 4,
              gap: 2
            }}
          >
            <IconButton 
              onClick={handlePrevPage}
              disabled={isAnimating}
              sx={{
                background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00E5FF 30%, #7C4DFF 90%)',
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 20px rgba(124, 77, 255, 0.5)'
                }
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography 
              sx={{ 
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.8rem',
                color: '#00E5FF',
                textShadow: '0 0 10px rgba(0, 229, 255, 0.5)'
              }}
            >
              {`${currentPage + 1} / ${totalPages}`}
            </Typography>
            <IconButton 
              onClick={handleNextPage}
              disabled={isAnimating}
              sx={{
                background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00E5FF 30%, #7C4DFF 90%)',
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 20px rgba(124, 77, 255, 0.5)'
                }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </motion.div>

        <AnimatePresence mode="wait">
          <Grid container spacing={4} component={motion.div} key={currentPage}>
            {currentPosts.map((post, index) => (
              <Grid item key={post.title} xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -50, rotateY: 30 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                >
                  <Card sx={{ 
                    height: '100%',
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(${post.color},0.2))`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${post.color}40`,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'perspective(1000px)',
                    '&:hover': {
                      transform: 'perspective(1000px) translateY(-5px) rotateX(5deg)',
                      boxShadow: `0 20px 40px ${post.color}40`
                    }
                  }}>
                    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                      <CardMedia
                        component="img"
                        image={post.image}
                        alt={post.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.8)',
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            filter: 'brightness(1)',
                            transform: 'scale(1.05)'
                          }
                        }}
                      />
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            background: `${post.color}CC`,
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontFamily: "'Press Start 2P', cursive",
                            fontSize: '0.7rem',
                            boxShadow: `0 0 20px ${post.color}80`
                          }}
                        >
                          {post.category}
                        </Box>
                      </motion.div>
                    </Box>
                    <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        <Typography 
                          gutterBottom 
                          variant="h5" 
                          component="h2"
                          sx={{ 
                            fontFamily: "'Russo One', sans-serif",
                            background: `linear-gradient(45deg, ${post.color}, #FFFFFF)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: `0 0 20px ${post.color}40`
                          }}
                        >
                          {post.title}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      >
                        <Typography 
                          paragraph
                          sx={{ 
                            fontFamily: "'Orbitron', sans-serif",
                            color: 'text.secondary',
                            mb: 3
                          }}
                        >
                          {post.content}
                        </Typography>
                      </motion.div>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          <Typography 
                            sx={{ 
                              fontFamily: "'Press Start 2P', cursive",
                              fontSize: '0.7rem',
                              color: `${post.color}`,
                              textShadow: `0 0 10px ${post.color}40`
                            }}
                          >
                            {post.date}
                          </Typography>
                        </motion.div>
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="contained"
                            href={post.link}
                            sx={{
                              background: `linear-gradient(45deg, ${post.color}, ${post.color}CC)`,
                              fontFamily: "'Press Start 2P', cursive",
                              fontSize: '0.7rem',
                              padding: '12px 24px',
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                background: `linear-gradient(45deg, ${post.color}CC, ${post.color})`,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 10px 20px ${post.color}40`
                              }
                            }}
                          >
                            <motion.div
                              animate={{ 
                                x: [0, 5, 0],
                                textShadow: [
                                  `0 0 5px ${post.color}`,
                                  `0 0 15px ${post.color}`,
                                  `0 0 5px ${post.color}`
                                ]
                              }}
                              transition={{ 
                                repeat: Infinity, 
                                duration: 2,
                                ease: "easeInOut"
                              }}
                            >
                              READ MORE
                            </motion.div>
                          </Button>
                        </motion.div>
                      </Box>
                    </CardContent>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at 50% 0%, ${post.color}20 0%, transparent 50%)`,
                        pointerEvents: 'none'
                      }}
                    />
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Blog;
