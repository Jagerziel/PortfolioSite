// Import Components

// Import CSS
import "./BottomBar.css";

// Export BottomBar Function
export default function BottomBar() {

    // Return Div for BottomBar Container
    return (
        <div className="BottomBar-container">
            {/* Shows on Webpage and Larger Screens */}
            <div className="BottomBar-text">
            Software Engineer   •   Innovator   •   Fullstack Developer    •    Project Manager    •    Multinational Experience
            </div>
            {/* Shows only on small screen sizes */}
            <div className="BottomBar-text-small">
            Software Engineer   •   Innovator   •   Project Manager 
            </div>
        </div>
    );
}