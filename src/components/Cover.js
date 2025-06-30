import React from 'react';
import { ReactTyped } from 'react-typed'; // Import the correct named export
import './Cover.css';

const Cover = () => {
  return (
    <div id="cover" className="cover-container">
      <div className="cover-content">
        <h1 className="cover-heading">
          Aniket Anand
        </h1>
        <p className="cover-text"> 
        <ReactTyped
            strings={[
              "Astronaut's, Come let's discover my SPACE"
            ]}
            typeSpeed={50}
          />
        </p>
        <a href={`${process.env.PUBLIC_URL}/PDF/Aniket Anand Resume.pdf`} download>
            <button className="download-button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Cover;
