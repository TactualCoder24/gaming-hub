import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useTheme } from './theme/theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import PlayGames from './components/PlayGames';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ConsoleComparison from './pages/BlogPosts/ConsoleComparison';
import Cricket07 from './pages/BlogPosts/Cricket07';
import GTA6Details from './pages/BlogPosts/GTA6Details';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/gaming-hub">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
          background: theme.palette.background.default,
          transition: 'background-color 0.3s ease'
        }}>
          <Navbar />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/play" element={<PlayGames />} />
              <Route path="/blog/console-comparison" element={<ConsoleComparison />} />
              <Route path="/blog/cricket-07" element={<Cricket07 />} />
              <Route path="/blog/gta6-details" element={<GTA6Details />} />
            </Routes>
          </Box>
          <Footer />
          <ThemeToggle onToggle={toggleTheme} />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
