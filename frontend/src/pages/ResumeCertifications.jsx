// src/pages/ResumeCertifications.jsx
import React from 'react';
import './ResumeCertifications.css';

const certifications = [
  {
    title: 'HackerRank Java (4⭐)',
    link: 'https://www.hackerrank.com/amitbehera121',
  },
  {
    title: 'British Airways Data Science Job Simulation (Forage)',
    link: 'https://www.theforage.com/simulations/british-airways/data-science',
  },
  {
    title: '4⭐ Java HackerRank',
    link: 'https://www.hackerrank.com/amitbehera121',
  },
  {
    title: 'Treasure Hunt Certificate',
    link: '#', // Replace with actual link
  },
  {
    title: 'Matriculation Certificate',
    link: '#', // Replace with actual link
  },
  {
    title: 'Senior Secondary Certificate',
    link: '#', // Replace with actual link
  },
  {
    title: 'View My LeetCode Profile',
    link: 'https://leetcode.com/Amitbehera121/',
  },
];

const ResumeCertifications = () => {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h2>Resume & Certifications</h2>

        <div className="download-resume">
          <a
            href="/resume.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>
        </div>

        <div className="cert-grid">
          {certifications.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeCertifications;
