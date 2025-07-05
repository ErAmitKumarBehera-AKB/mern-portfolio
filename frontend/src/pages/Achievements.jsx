// src/pages/Achievements.jsx
import React from 'react';
import './Achievements.css';

const achievements = [
  {
    title: 'Finalist – JPMorgan Chase & Co. Code for Good 2025',
    description:
      'Selected among top teams across India to develop a MERN stack solution for Reaching Roots Foundation.',
    date: 'Jun 2025',
  },
  {
    title: '4⭐ Java @ HackerRank',
    description:
      'Solved 300+ problems and achieved 4-star Java badge for strong problem-solving skills.',
    date: '2024',
  },
  {
    title: 'British Airways Data Science Job Simulation – Forage',
    description:
      'Completed a real-world simulation on customer sentiment analysis and business insights.',
    date: '2024',
  },
  {
    title: 'Treasure Hunt (1st Position)',
    description:
      'Won first prize in a tech treasure hunt at SOA University among 50+ teams.',
    date: '2023',
  },
  {
    title: 'State-level Chess Player',
    description:
      'Represented school at the state level chess tournament. Honed strategic thinking and focus.',
    date: '2019',
  },
];

const Achievements = () => {
  return (
    <section className="achievements">
      <div className="achievements-content">
        <h2>Achievements</h2>
        <ul className="timeline">
          {achievements.map((item, index) => (
            <li key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-date">{item.date}</span>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
