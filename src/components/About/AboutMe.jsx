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
            <h1>
              An Innovative Mindset that Brings Projects to New Heights
            </h1>
            <p id="italics">I'm an innovator with a passion for business and tech.  Here are some of my passions: </p>
            <div className="AboutMe-List">
              <ul>
                <li className="amli">
                  <div><img id="img1" className="profile-img" src="images/CompIcon.png" alt="Img" /></div>
                  <div>Software Engineering</div>
                  </li>
                <li className="amli">
                  <div><img id="img1" className="profile-img" src="images/ProdIcon.png" alt="Img" /></div>
                  <div>Product Development</div>
                </li>
                <li className="amli">
                  <div><img id="img1" className="profile-img" src="images/IntlIcon.png" alt="Img" /></div>
                  <div>International Business</div>
                </li>
              </ul>
              <ul>
                <li className="amli">
                  <div><img id="img1" className="profile-img" src="images/LightIcon.png" alt="Img" /></div>
                  <div>Innovative Technologies</div>
                </li>
                <li className="amli">
                  <div><img id="img1" className="profile-img" src="images/FishIcon.png" alt="Img" /></div>
                  <div>Sustainable Design</div>
                </li>
                <li className="amli">
                  <div><img id="img1" className="profile-img" src="images/SustIcon.png" alt="Img" /></div>
                  <div>Achieving the Impossible</div>
                  
                  
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}