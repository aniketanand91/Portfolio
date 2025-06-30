import React from 'react';
import './About.css';
import astronaut_logo from '../images/Astronaut.png'

const About = () => {
    return (
        <div id="about" className="about-container">
            
            <div className="about-me">
                <p>A developer and designer, deeply passionate about simplifying things through technology and innovation, 
                love to create designs and code them out. Interested in devising a better problem‑solving method for challenging
                tasks, learning new technologies and tools along the way. 
                <br/>
                <br></br>
                I work with all kinds of modern JavaScript - Node js, React js etc. And possess accountable knowledge of OOPs concepts.
                </p>
                {/* <h2>My skills include:</h2>
                <li>Languages: JavaScript, Python, Java, Linux/Unix</li>
                <li> Frontend: React, Redux, HTML5, CSS3 </li>
                <li>Backend: Node.js, SQL </li>
                <li>Tools: VSCode, Git & Github, Eclipse, Azure Cloud </li> */}

                
            </div>
            <div className="astronaut-logo">
                <img src= {astronaut_logo} alt="astronaut_logo" ></img>

                <br></br>
                <a
                    href="https://www.linkedin.com/in/i-aniket-anand/" // Replace with your LinkedIn profile URL
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security for external links
                    className="linkedin-link"
                >
                    LinkedIn
                </a>
            </div>
            
            
        </div>
    );
};

export default About;