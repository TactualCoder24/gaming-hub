import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { darkTheme, lightTheme } from './theme/theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ConsoleComparison from './pages/BlogPosts/ConsoleComparison';
import Cricket07 from './pages/BlogPosts/Cricket07';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = useMemo(() => isDarkMode ? darkTheme : lightTheme, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/gaming-hub">
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default'
        }}>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog/console-comparison" element={<ConsoleComparison />} />
              <Route path="/blog/cricket-07" element={<Cricket07 />} />
            </Routes>
          </Box>
          <Footer />
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
