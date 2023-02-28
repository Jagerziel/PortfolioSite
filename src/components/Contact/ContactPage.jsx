import React from "react";
// Import Components

// Import CSS
import "./ContactPage.css";
// Import Icons

// Export About Function
export default function ContactPage() {

    // Return Div for About Container
    return (
        <div className="Contact-Page-container">
            <div className="Contact-Page-container-overlay">
                <div className="Contact-Page-Header">
                    Contact
                </div>
                <h1 className="Contact-Page-Header2">
                    DETAILS
                </h1>
                <div className="Contact-Page-ContentHolder">
                    <div className="ContactRight">
                        <p className="ContactDesc">As a lifelong innovator I'm intrigued by other's approaches, methodologies, principals, and strategies.  I enjoy learning and teaching and I very much welcome the opportunity to collaborate or brainstorm ideas. 
                        </p>
                        <p className="ContactDesc">Please reach out and say hello!</p>
                    </div>
                    <div className="ContactLeft">
                        <div>
                            <div className="ContactLeftBox">
                                <a href="https://www.linkedin.com/in/ryanehrlich/" target="_blank">
                                    <img src={require("./Icons/LinkedinIcon.png")} className="ContactIcon1"/>
                                </a>
                                <div>LinkedIn Profile</div>
                            </div>
                            <div className="ContactLeftBox">
                                <a href="https://github.com/Jagerziel" target="_blank">    
                                    <img src={require("./Icons/GithubIcon.png")} className="ContactIcon1"/>
                                </a>
                                <div>Github</div>
                            </div>
                            <div className="ContactLeftBox">
                                <img src={require("./Icons/CVIcon.png")} className="ContactIcon1" onClick={ () => window.open(require("./Documents/Resume.pdf"), '_none')}/>
                                <div>Download CV</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}