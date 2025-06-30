import React from 'react';
import './Navbar.css';
import universelogo from '../images/universe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faEnvelope, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#cover"><img src={universelogo} alt="ship-logo" class="about-logo"></img></a>
      </div>
      <div>
      <ul className="navbar-links">
        <li>
          <a href="#about"> <FontAwesomeIcon icon={faUser} className="icon" /> About </a>
        </li>
        <div class="separator"></div>
        <li>
          <a href="#experience"> <FontAwesomeIcon icon={faBriefcase} className="icon" /> Experience </a>
        </li>
        <div class="separator"></div>
        <li>
          <a href="#project"> <FontAwesomeIcon icon={faProjectDiagram} className="icon" /> Project </a>
        </li>
        <div class="separator"></div>
        <li>
          <a href="#technologies"> <FontAwesomeIcon icon={faCode} className="icon" /> Skills </a>
        </li>
        <div class="separator"></div>
        <li>
          <a href="#contact"> <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;