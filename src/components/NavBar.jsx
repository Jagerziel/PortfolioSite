// Import React-Router-Dom
import { Link } from "react-router-dom";
// Import Components

// Import CSS
import "./NavBar.css";

// Export NavBar Function
export default function NavBar() {

  // Return Div for NavBar Container
  return (
    <div className="NavBar-container">
      <div className="NavBar-left">
      <div className="NavBar-name">
            Ryan Ehrlich
        </div>
        <div className="NavBar-title">
            Software Engineer
        </div>
      </div>
      <div className="NavLinks-container">
        {/* <Link to="/" className="Link">
            Home
        </Link> */}
        <Link to="/About" className="Link">
            About
        </Link>
        <Link to="/Portfolio" className="Link">
            Portfolio
        </Link>
        <Link to="/Contact" className="Link">
            Contact
        </Link>
      </div>
    </div>
  );
}