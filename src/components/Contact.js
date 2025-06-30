import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div id="contact" className='contact-container'>
            <div className='contact-heading'>
                <h1>Join my crew—let’s make connections that go beyond the stratosphere!</h1>
            </div>
            <div className='contact-me'>
                <div className='buttons-to'>
                    <div className="button">
                        <button 
                            className="contact-button email-button" 
                            onClick={() => window.location.href = "mailto:aniketanand91@gmail.com"}
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                            E-mail 
                        </button>
                    </div>

                    <div className="button">
                        <button 
                            className="contact-button instagram-button" 
                            onClick={() => window.open('https://www.instagram.com/aniketanand01', '_blank')}
                        >
                            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                            Instagram
                        </button>
                    </div>

                    <div className="button">
                        <button 
                            className="contact-button linkedin-button" 
                            onClick={() => window.open('https://www.linkedin.com/in/i-aniket-anand/','_black')}
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                            Linkedin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
