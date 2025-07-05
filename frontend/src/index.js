// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import ReactGA from 'react-ga4';

// ✅ Initialize Google Analytics with your Measurement ID
ReactGA.initialize('G-X05BD9V7DQ'); // Replace with your actual ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
