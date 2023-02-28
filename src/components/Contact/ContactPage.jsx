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
                        <p className="ContactDesc">
                            <span id="blue">"Be the change you want to see in the world"</span>
                        </p>
                        <p className="ContactDesc">
                            I enjoy teaching and learing from others and I look forward to strategizing approaches, methodologies, and philosophies.  Let's collaborate and brainstorm ideas. 
                        </p>
                        <p className="ContactDesc">Please reach out and say hello!</p>
                    </div>
                    <div className="ContactLeft">
                        <div className="ContactLeftBoxHolder">
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
                                <div className="hover">
                                    <img src={require("./Icons/CVIcon.png")} className="ContactIcon1" onClick={ () => window.open(require("./Documents/Resume.pdf"), '_none')}/>
                                </div>
                                <div>Download CV</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}