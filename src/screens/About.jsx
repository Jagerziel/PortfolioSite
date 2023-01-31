// Import Components
import AboutMe from "../components/About/AboutMe.jsx";
// Import CSS
import "./About.css";

// Export About Function
export default function About() {

  // Return Div for About Container
  return (
    <div className="About-container">
      <div>
        About Page
        <AboutMe />
      </div>
    </div>
  );
}