// src/pages/About.jsx
import React from 'react';
import './About.css';
import Seo from '../components/Seo';

const About = () => {
  return (
    <section className="about">
      <Seo
        title="About Amit | Data Science & MERN Developer"
        description="Learn more about Amit Kumar Behera, a 3rd-year B.Tech CSE student specializing in Data Science and MERN Stack."
        keywords="About Amit, Data Science, SOA, MERN Developer"
        url="https://amit-portfolio-two.vercel.app/about"
      />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm <strong>Amit Kumar Behera</strong>, a 3rd-year B.Tech Computer Science (Data Science) student at <strong>Siksha 'O' Anusandhan (Deemed to be University)</strong>.
        </p>
        <p>
          I'm passionate about building solutions that combine data-driven insights with scalable technology. I specialize in <strong>Machine Learning</strong>, <strong>Data Science</strong>, and have hands-on experience with the <strong>MERN stack</strong>.
        </p>
        <p>
          Recently, I was a finalist at <strong>JPMorgan Chase & Co. Code for Good 2025 – Hyderabad</strong>, where our team developed a digital platform for the NGO Reaching Roots Foundation.
        </p>
        <p>
          I'm continuously improving my skills in full-stack development and deep learning along with Data Structures and Algorithms, and I'm currently working on projects involving real-world data and intelligent applications.
        </p>
      </div>
    </section>
  );
};

export default About;
