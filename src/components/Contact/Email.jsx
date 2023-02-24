// Import Module
import { useState } from "react";

// Import Components

// Import CSS
import "./Email.css";
// Import Icons

// Export About Function
export default function Email() {
    const [email , setEmail] = useState("")
    // Return Div for About Container
    return (
        <div className="Email-Page-container">
            <div className="Email-Page-container-overlay">
                <div className="Email-Page-Header">
                    Reach Out Directly
                </div>
                <div className="Email-Page-ContentHolder">
                    {/* <form action="submit">
                        <input type="text" name="Full Name" id="NameField" />
                    </form> */}
                    <p>TESTING</p>
                </div>
            </div>
        </div>
    );
}