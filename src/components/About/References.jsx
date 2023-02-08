// Import Components
import ReferenceComp from "./ReferenceComp.jsx";
// Import CSS
import "./References.css";
// Import Icons

// Export About Function
export default function References() {
  
  // Return Div for About Container
  return (
    <div className="References-container">
      <div className="References-Header-container">
        <div className="References-Header">
            References
        </div>
        <div className="References-ContentHolder">
            <ReferenceComp />
        </div>
      </div>
    </div>
  );
}