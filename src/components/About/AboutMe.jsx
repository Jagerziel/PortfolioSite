// Import Modules
import { useState } from "react";

// Import Components

// Import CSS
import "./AboutMe.css";
// Import Icons

// Export About Function
export default function AboutMe() {
  const [activeNav, setActiveNav] = useState("#");

  // Return Div for About Container
  return (
    <div className="AboutMe-container">
      <div className="About-Me-Header-container">
        <div className="About-Me-Header">
            About
        </div>
        <h1 className="About-Me-Header2">
            BIOGRAPHY SNAPSHOT
        </h1>
        <div className="AboutMe-ContentHolder">
          <div className="AboutMe-Left">
            <img className="profile-img" src="images/profilepic01.jpeg" alt="Img" />
          </div>
          <div className="AboutMe-Right">
            <h2 className="AboutMe-Paragraph-Header">
              A Creative Mindset that Brings Projects to New Heights
            </h2>
            <p id="italics">An innovator with a passion for business and techology</p>
            <div className="AboutMe-List">
              <ul>
                <li className="amli">
                  <div><img className="AMImg" src="images/CompIcon.png" alt="Img" /></div>
                  <div>Software Engineering</div>
                  </li>
                <li className="amli">
                  <div><img className="AMImg" src="images/ProdIcon.png" alt="Img" /></div>
                  <div>Product Development</div>
                </li>
                <li className="amli">
                  <div><img className="AMImg" src="images/IntlIcon.png" alt="Img" /></div>
                  <div>International Business</div>
                </li>
              </ul>
              <ul>
                <li className="amli">
                  <div><img className="AMImg" src="images/LightIcon.png" alt="Img" /></div>
                  <div>Innovative Technologies</div>
                </li>
                <li className="amli">
                  <div><img className="AMImg" src="images/FishIcon.png" alt="Img" /></div>
                  <div>Sustainable Design</div>
                </li>
                <li className="amli">
                  <div><img className="AMImg" src="images/SustIcon.png" alt="Img" /></div>
                  <div>Achieving the Impossible</div>
                </li>
              </ul>
            </div>
            <div className="AboutMe-Desc">
              Experience in <span className="aboutMe__p">Front-End</span> and{" "}
              <span className="aboutMe__p">Back-End</span> development. A highly
              analytical, innovative, and strategic thinker who formulates and
              implements unique solutions to complex problems. As a former
              multinational insurance broking and consulting professional, I
              approach software development with a keen perspective on business
              application as well as current and future needs. I have worked
              with complex multinationals in the Education, Food and Beverage,
              Financial, Real Estate, and Retail sectors as well as domestic
              Renewable Energy.
            </div>
            <div className="AboutMe-Desc">
              My passion is creating things that have never been built before and I blueprint to ensure the creation can evolve, maintain sustainable upkeep costs, and foster easy adoption.   
            </div>
            <div className="AboutMe-Desc" id="subscript">
              Always innovating, always sharing ideas, and always pushing the limits.
            </div>
            <a
              id="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/ryanehrlich/"
              onClick={() => setActiveNav("linkedin")}
              className={activeNav === "linkedin" ? "active" : ""}
            >
            <span className="AboutMe-LBSS">
              Let's build something special!
            </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}