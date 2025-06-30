import React from "react";
import Comviva from "../images/Comviva_logo.png"
import './Experience.css';

const Experience = () => {
    return (
        <div id="experience" className="experience-container">
            {/* <div className="experience-bg-logo">
                <img src= { Bomb } alt="" ></img>
            </div> */}
            <div className="experience-heading">
            <h1>Experience</h1>
            </div>
            <div className="experience-div">
            <div className="experience-logo">
                <img src={ Comviva } alt="comviva-logo"></img>
                {/* <img src={ LetsGrowMore} alt="lets-grow-more-logo"></img> */}
            </div>
            <div className="experience-content">
                <h1>Software Engineer</h1>
                {/* <h4>- 08/2023 to Present </h4> */}
                <li>Maintained and optimized Linux shell scripts to automate production server tasks for the Mobiquity Pay application, improving operational efficiency by 70% and reducing manual interventions.</li> 
<li>Provided backend support through in-depth analysis and query optimization in Oracle and PostgreSQL, maintaining 99.6% application uptime, data consistency, and reliable performance in production environments.</li>
<li>Monitored system health using custom scripts and basic native monitoring tools.</li> 
<li>Led weekly and monthly review calls with cross-functional teams to track key performance indicators (KPIs), review incidents, and align on deliverables—improving team coordination and reducing incident recurrence by 20%.</li> 
<li>Demonstrated exceptional troubleshooting expertise by identifying and resolving critical system and application issues, minimizing downtime by 40% and ensuring continuous operation.</li>
<ul><p>Tools Used</p>
    <li>AWS Cloud</li>
    <li>Linux Server</li>
    <li>SQL</li>
    <li>OracleDB</li>
</ul>

            </div>
            </div>
            
        </div>
    );
};

export default Experience;
