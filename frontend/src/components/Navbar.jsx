import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const { pathname } = useLocation();
    const { darkMode, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="nav-logo">Amit Behera</div>
            <ul className="nav-links">
                <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
                <li><Link to="/skills" className={pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
                <li><Link to="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
                <li><Link to="/achievements" className={pathname === '/achievements' ? 'active' : ''}>Achievements</Link></li>
                <li>
                    <Link to="/resume" className={pathname === '/resume' ? 'active' : ''}>
                        Resume
                    </Link>
                </li>

                <li><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                <li>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {darkMode ? '🌞' : '🌙'}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
