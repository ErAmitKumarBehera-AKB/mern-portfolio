import React from 'react';
import './Home.css'; // You’ll create this CSS file

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Amit Kumar Behera</span></h1>
        <h2>Finalist @ CFG 2025 | Data Science & MERN Enthusiast</h2>
        <p>
          A 3rd-year B.Tech CSE (Data Science) student passionate about building real-world solutions through technology.
          Skilled in Python, Java, Machine Learning, and Web Development using the MERN stack.
        </p>
        <div className="home-buttons">
          <a href="/Amit-Kumar-Resume.pdf" download className="btn">
            Download Resume
          </a>
          <a href="/contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
