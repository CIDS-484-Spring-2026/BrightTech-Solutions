import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';  // <- correct relative path
import logo from '../assets/brightTech_logo.svg';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="navbarLogo">
        <Link to="/">
          <img src={logo} className="brightTechLogo"/>
        </Link>
        
      </div>

      <div className="navbarLinks">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        <Link to="/getstarted" className={location.pathname === '/getstarted' ? 'active' : ''}>Get Started</Link>
        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Log In</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
