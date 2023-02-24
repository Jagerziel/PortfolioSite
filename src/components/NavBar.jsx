// Import React-Router-Dom
import { NavLink } from "react-router-dom";
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
        {/* <NavLink to="/" className="Link" activeClassName="active">
            Home
        </NavLink> */}
        <NavLink to="/About" className="Link" activeClassName="active">
            About
        </NavLink>
        <NavLink to="/Portfolio" className="Link" activeClassName="active">
            Portfolio
        </NavLink>
        <NavLink to="/Contact" className="Link" activeClassName="active">
            Contact
        </NavLink>
      </div>
    </div>
  );
}