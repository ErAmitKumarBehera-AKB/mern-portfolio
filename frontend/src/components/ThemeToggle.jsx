// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        padding: '0.6rem 1rem',
        borderRadius: '8px',
        fontSize: '1.1rem',
        background: 'transparent',
        border: '1px solid #aaa',
        color: darkMode ? '#f0f0f0' : '#111',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
