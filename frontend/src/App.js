// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import ResumeCertifications from './pages/ResumeCertifications';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { initGA, logPageView } from './analytics/ga';

const AppWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Initialize Google Analytics on first load
  }, []);

  useEffect(() => {
    logPageView(); // Log every page change
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="skills" element={<Skills />} />
        <Route path="resume" element={<ResumeCertifications />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;
