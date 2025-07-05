import React from 'react';
import Seo from '../components/Seo';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects | Amit Kumar Behera"
        description="Explore the software and web development projects built by Amit Kumar Behera, including full-stack MERN solutions and real-world hackathon work."
        keywords="Amit Kumar Behera projects, MERN stack, CFG 2025, Full Stack Developer"
        url="https://amit-portfolio-two.vercel.app/projects"
      />

      <section className="projects">
        <div className="projects-content">
          <h2>Projects</h2>

          <div className="project-card">
            <h3>Village Management Platform – CFG 2025</h3>
            <p className="project-subtitle">
              Built for <strong>Reaching Roots Foundation</strong> during JPMorgan Chase & Co. Code for Good 2025
            </p>
            <ul className="project-details">
              <li>Developed a full-stack platform using <strong>MERN</strong> to digitize rural agricultural workflows.</li>
              <li>Enabled filtering and identification of high-impact villages based on custom metrics.</li>
              <li>Streamlined onboarding and monitoring of Village Level Entrepreneurs (VLEs).</li>
              <li>Built interactive dashboard for real-time tracking of machinery, services, and donations.</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/your-team-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
              <a
                href="/"
                className="disabled-link"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo (Private)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
