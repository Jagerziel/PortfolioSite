// Import Components
import AboutMe from "../components/About/AboutMe.jsx";
import SESkills from "../components/About/SESkills.jsx";
// Import CSS
import "./About.css";

// Export About Function
export default function About() {

  // Return Div for About Container
  return (
    <div className="About-container">
      <div>
        <AboutMe />
        <SESkills />
      </div>
    </div>
  );
}

