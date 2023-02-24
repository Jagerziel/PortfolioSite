// Import Components
import AboutMe from "../components/About/AboutMe.jsx";
import SESkills from "../components/About/SESkills.jsx";
import References from "../components/About/References.jsx";
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
        {/* <References /> */}
      </div>
    </div>
  );
}

