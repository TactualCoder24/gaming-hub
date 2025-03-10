import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingCubeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

const FloatingCube: React.FC<FloatingCubeProps> = ({ position, color, scale = 1 }) => {
  return (
    <Float
      speed={1.5} 
      rotationIntensity={2} 
      floatIntensity={2}
    >
      <mesh scale={scale} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const FloatingGameIcon = () => {
  return (
    <group>
      {/* Controller Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial
          color="#7C4DFF"
          metalness={0.8}
          roughness={0.2}
          emissive="#B47CFF"
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Buttons */}
      <mesh position={[0.5, 0.3, 0]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial
          color="#00E5FF"
          metalness={0.8}
          roughness={0.2}
          emissive="#6EFFFF"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[-0.5, 0.3, 0]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial
          color="#00E5FF"
          metalness={0.8}
          roughness={0.2}
          emissive="#6EFFFF"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8, position: 'relative' }}>
      {/* 3D Background */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars
            radius={50}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <group>
            <FloatingCube position={[-4, 2, -5]} color="#7C4DFF" scale={1.5} />
            <FloatingCube position={[4, -2, -5]} color="#00E5FF" scale={1.2} />
            <Float speed={1} rotationIntensity={1} floatIntensity={1}>
              <FloatingGameIcon />
            </Float>
          </group>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 6,
              fontFamily: "'Press Start 2P', cursive",
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(124, 77, 255, 0.3)',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontFamily: "'Russo One', sans-serif",
                    color: '#7C4DFF',
                    mb: 3,
                  }}
                >
                  Who Am I?
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  I'm a passionate gamer and content creator dedicated to bringing you the latest in gaming news, reviews, and tutorials. With years of experience in the gaming industry, I strive to provide high-quality content that helps fellow gamers stay informed and entertained.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontFamily: "'Russo One', sans-serif",
                    color: '#00E5FF',
                    mb: 3,
                  }}
                >
                  My Mission
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  My goal is to create a community where gamers can find reliable information, engage in meaningful discussions, and stay up-to-date with the ever-evolving gaming landscape. Through detailed reviews, in-depth analysis, and engaging content, I aim to help you make informed decisions about your gaming experiences.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  mt: 4,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontFamily: "'Russo One', sans-serif",
                    color: '#FF1744',
                    mb: 3,
                  }}
                >
                  Gaming Expertise
                </Typography>
                <Grid container spacing={3}>
                  {[
                    "PC Gaming",
                    "Console Gaming",
                    "Game Reviews",
                    "Gaming News",
                    "Hardware Reviews",
                    "Streaming",
                  ].map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={skill}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            textAlign: 'center',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              background: 'rgba(255, 255, 255, 0.1)',
                              boxShadow: '0 8px 20px rgba(124, 77, 255, 0.2)',
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Press Start 2P', cursive",
                              fontSize: '0.8rem',
                              color: '#B47CFF',
                            }}
                          >
                            {skill}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
