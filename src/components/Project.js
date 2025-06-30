import React from "react";
import LetsGrowMore from "../images/LetsGrowMore.png"
import './Experience.css';


const Experience2 = () => {
    return (
        <div className="experience-container">
            {/* <div className="experience-bg-logo">
                <img src= { Bomb } alt="" ></img>
            </div> */}
            <div className="experience-heading">
            <h1>Project</h1>
            </div>
            <div className="experience-div">
            <div className="experience-logo">
                <img src={ LetsGrowMore} alt="lets-grow-more-logo"></img>
            </div>
            <div className="experience-content">
                <h1>Web Developer Intern : Report it -
                    <a
                            href="https://github.com/aniketanand91/Report_it"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                    >
                            🔗
                    </a>
                </h1>
                {/* <h3>Report it -</h3> */}
                <li>A website that addresses the public safety concerns by establishing a direct communication channel between users 
and local law enforcement. The platform facilitates the prompt reporting of potential dangers or discomforts, with 
a specific focus on women's safety and emergency situations requiring immediate attention from hospitals.</li>
<li>Utilized HTML, CSS, JavaScript for frontend development and Node.js with Express for backend, integrating 
Cloud storage to optimize image handling and MySQL database for efficient data storage and retrieval. </li> 
<li>Use case - for women's safety, enabling users to swiftly communicate mishappening or discomfort by providing 
image testimonials. This innovative approach empowers users to convey detailed situational information to the 
local police department, facilitating proactive intervention and preventive measures. </li>
<ul><p>Tools Used</p>
    <li>HTML/CSS</li>
    <li>JavaScript</li>
    <li>MySQL</li>
    <li>React js</li>
    <li>Node js</li>
</ul>
            </div>
            </div>
            
        </div>
    );
};

export default Experience2;
