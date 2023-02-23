import PortfolioComp from "./PortfolioComp.jsx";
// Import CSS
import "./PortfolioPage.css";
// Import Icons

// Export About Function
export default function PortfolioPage() {
  
// Return Div for About Container
return (
  <div className="PortfolioPage-container">
    <div className="PortfolioPage-Header-container">
      <div className="PortfolioPage-Header">
        Portfolio
      </div>
      <h1 className="Portfolio-Header">
            SOFTWARE ENGINEERING PROJECTS
      </h1>
      <div className="PortfolioPage-ContentHolder">
          <PortfolioComp />
      </div>
    </div>
  </div>
);
}