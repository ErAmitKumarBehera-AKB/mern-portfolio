// src/pages/Achievements.jsx
import React from 'react';
import './Achievements.css';
import { useTheme } from '../context/ThemeContext';
import Seo from '../components/Seo';

const Achievements = () => {
  const { darkMode } = useTheme();

  const achievements = [
    {
      title: 'Finalist @ JPMorgan Chase & Co. Code for Good 2025',
      date: 'June 2025',
      description: 'Built a full-stack MERN platform for the NGO Reaching Roots Foundation.'
    },
    {
      title: 'State-level Chess Player',
      date: '2022 - Present',
      description: 'Represented school and college in several state-level tournaments.'
    },
    {
      title: '4⭐ Java @ HackerRank',
      date: '2024',
      description: 'Solved 250+ coding problems and earned a 4-star Java badge.'
    },
    {
      title: 'British Airways Data Science Virtual Internship',
      date: '2024',
      description: 'Completed a simulation via Forage using real-world data challenges.'
    },
    // Add more if needed
  ];

  return (
    <section className={`achievements ${darkMode ? 'dark-mode' : ''}`}>
      <Seo
        title="Achievements | Amit Portfolio"
        description="Timeline of key achievements and recognitions"
        keywords="achievements, awards, hackathons, honors"
        url="https://amit-portfolio.vercel.app/achievements"
      />

      <div className="achievements-content">
        <h2>Achievements</h2>

        <div className="timeline">
          {achievements.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-date">{item.date}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
