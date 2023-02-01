// Import Components

// Import CSS
import "./AboutMe.css";

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
            Right
          </div>
        </div>
      </div>
    </div>
  );
}