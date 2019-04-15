import React from 'react';
import logo from '../../logo.png';
import '../../App.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="city tour logo" />
      <ul className="nav-links">
        <li>
          <a href="#!" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="#!" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="#!" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
