import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // your styles

const Home = () => {
  return (
    <section className="home">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Amit Kumar Behera
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Finalist @ JPMorgan Chase & Co. Code for Good 2025 | Data Science & MERN Enthusiast
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I'm a 3rd-year B.Tech CSE (Data Science) student passionate about building real-world solutions through technology.
        Skilled in Python, Java, Machine Learning, and MERN Stack Web Development.
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-outline">Contact Me</a>
      </motion.div>
    </section>
  );
};

export default Home;
