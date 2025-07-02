import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-content">
        <h2>Skills</h2>

        <div className="skill-category">
          <h3>Programming & Problem Solving</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>DSA (Data Structures & Algorithms)</li>
            <li>Problem Solving</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Data Science & Machine Learning</h3>
          <ul>
            <li>Machine Learning</li>
            <li>Data Analysis</li>
            <li>Data Cleaning</li>
            <li>Data Visualization</li>
            <li>Data Collection</li>
            <li>Data Modeling</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
            <li>Scikit-learn</li>
            <li>Web Scraping</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Web Development (MERN Stack)</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>IntelliJ IDEA</li>
            <li>Microsoft Excel</li>
            <li>Microsoft PowerPoint</li>
            <li>Microsoft Word</li>
            <li>Microsoft Office</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Soft Skills & Achievements</h3>
          <ul>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>State-level Chess Player</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
