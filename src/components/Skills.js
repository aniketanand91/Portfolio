// import React from "react";
import React, { useEffect, useState } from 'react';
import './Skills.css';



const Technologies = () => {
  return (
      <div id="technologies" className="technologies-container">

        <div className="technologies-heading">
          <h1>Technologies</h1>
        </div>

        <div className="technologies-div">

          <div className="tech-first">
            <li>Java</li>
            <li>Linux server</li>
            <li>OOPS</li>
            <li>SQL</li>
            <li>Data Structures</li>
            <li>Microsoft Office</li>
          </div>

          <div className="tech-second">
          <li>Azure Cloud</li>
          <li>Javascript</li>
            <li>React js</li>
            <li>Node js</li>
            <li>HTML/CSS</li>
            <li>OracleDB</li>            
          </div>
        </div>




       
      </div>
  );
};


export default Technologies; 






