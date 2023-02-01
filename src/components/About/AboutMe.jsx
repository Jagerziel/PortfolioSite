// Import Components

// Import CSS
import "./AboutMe.css";

// Import Icons



// Export About Function
export default function AboutMe() {

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
            <img className="profile-img" src="images/pic_placeholder.jpg" alt="Img" />
          </div>
          <div className="AboutMe-Right">
            <h2>
              An Innovative Mindset that Brings Projects to New Heights
            </h2>
            <p id="italics">I'm an innovator with a passion for business and tech.  Here are some of my passions: </p>
            <div className="AboutMe-List">
              <ul>
                <li className="amli">
                  <div><img id="img1" className="profile-img" src="images/CompIcon.png" alt="Img" /></div>
                  <div>Software Engineering</div>
                  </li>
                <li className="amli">Product Development</li>
                <li className="amli">International Business</li>
              </ul>
              <ul>
                <li className="amli">Innovate Technologies</li>
                <li className="amli">Sustainable Design</li>
                <li className="amli">Achieving the Impossible</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}