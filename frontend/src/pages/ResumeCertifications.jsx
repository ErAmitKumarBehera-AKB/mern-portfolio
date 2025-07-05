// src/pages/ResumeCertifications.jsx
import React from 'react';
import './ResumeCertifications.css';
import { useTheme } from '../context/ThemeContext';

const ResumeCertifications = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`resume-section ${darkMode ? 'dark' : ''}`}>
      <div className="resume-content">
        <h2>Resume & Certifications</h2>

        <div className="resume-links">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
          </a>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            <li>
              <a href="https://www.hackerrank.com/certificates/xxxxx" target="_blank" rel="noopener noreferrer">
                Java (HackerRank 4⭐) – View Certificate
              </a>
            </li>
            <li>
              British Airways Data Science Job Simulation (Forage) – Completed
            </li>
            <li>
              Treasure Hunt Winner – HACKERWAR 5.0
            </li>
            <li>
              View my <a href="https://leetcode.com/your-leetcode-url/" target="_blank" rel="noopener noreferrer">LeetCode profile</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeCertifications;
