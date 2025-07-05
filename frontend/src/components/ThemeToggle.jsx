// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
