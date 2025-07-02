// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // We'll create this next for styling

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">Amit Behera</div>
      <ul className="nav-links">
        <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
        <li><Link to="/skills" className={pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
        <li><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
