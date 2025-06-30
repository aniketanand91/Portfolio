import React from "react";
import Receptive from "../images/receptive_logo.png";
// import Receptive from "../images/receptive_logo.jpg";
import './Experience.css';

const Experience = () => {
    return (
        <div id="project" className="experience-container2">
            <div className="experience-heading2">
                <h1>Freelance Live Project</h1>
            </div>
            <div className="experience-div2">
                <div className="experience-logo2">
                    <img src={Receptive} alt="receptive-logo" />
                </div>
                <div className="experience-content">
                    <h1>
                        Receptive India{" "}
                        <a
                            href="https://receptive.co.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            🔗
                        </a>
                    </h1>
                    
                    <li>
                        A full-stack eLearning platform to streamline course publishing, purchasing, and delivery workflows, reducing manual effort by 60%. Implemented role-based access for tutors, administrators, and end-users. Focused on automation and operational efficiency to enable real-time functionality and seamless content delivery.
                    </li>
                    
                    <li>
                        Implemented key features such as secure user authentication, OTP verification (with &gt; 99% delivery success rate), course upload and sharing modules, interactive dashboards, course purchasing workflows, review and rating systems, and a coupon distribution script for targeted promotions.
                    </li>
                    
                    <li>
                        Built a responsive user interface using React.js. Developed backend APIs with Node.js and Express, integrated MySQL for efficient and scalable data handling, and containerized the backend using Docker to ensure consistent deployment across environments.
                    </li>
                    
                    <li>
                        Deployed on AWS Cloud, leveraging EC2 for backend hosting, S3 for secure video and asset storage, RDS for managed MySQL databases, and SNS for OTP-based user verification and password reset. Integrated CloudWatch to monitor OTP service logs, and configured Route 53 to seamlessly map the domain.
                    </li>
                    
                    <ul>
                        <p>Tools Used</p>
                        <li>AWS Cloud - EC2, S3, SNS, Route 53 and CloudWatch</li>
                        <li>Linux Server</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
