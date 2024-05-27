import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      {/* ===== Navbar ===== */}
      <div id="navbar">
        <div>
          <img src="https://www.logolynx.com/images/logolynx/9b/9b08c990d3eb942a42072d3b5d14f588.jpeg" alt="logo" id="logo-1" />
        </div>
        <div id="nav-ele">
          <Link to="/"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/skills"><p>Skills</p></Link>
          <Link to="/projects"><p>Projects</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
