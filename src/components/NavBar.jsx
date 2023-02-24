//Import Modules
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
// Import Components

// Import CSS
import "./NavBar.css";

// Export NavBar Function
export default function NavBar() {
  const [index, setIndex] = useState(0);
  const [iterator, setIterator] = useState(0)

  let text = ["Software Engineer", "Innovator", "Developer", "Project Manager", "Multinationals", "Sustainable Design"]
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === text[iterator].length) {
          setIterator(prev => {
            if (prev + 1 === text.length) {
              return 0
            }
            return prev + 1
          })
          return 0;
        }
        return prevIndex + 1;
      });

    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Return Div for NavBar Container
  return (
    <div className="NavBar-container">
      <div className="NavBar-left">
        <div className="NavBar-name">
            Ryan Ehrlich
        </div>
        <div className="NavBar-title">
            {/* Software Engineer */}
            {text[iterator].substring(0, index)}
        </div>
      </div>
      <div className="NavLinks-container">
        {/* <NavLink to="/" className="Link" activeClassName="active">
            Home
        </NavLink> */}
        <NavLink to="/" className="Link">
            About
        </NavLink>
        <NavLink to="/Portfolio" className="Link">
            Portfolio
        </NavLink>
        <NavLink to="/Contact" className="Link">
            Contact
        </NavLink>
      </div>
    </div>
  );
}