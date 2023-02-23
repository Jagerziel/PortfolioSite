// Import Components

// Import CSS
import "./ContactPage.css";
// Import Icons

// Export About Function
export default function ContactPage() {

  // Return Div for About Container
  return (
    <div className="Contact-Page-container">
      <div className="Contact-Page-Header-container">
        <div className="Contact-Page-Header">
            Contact
        </div>
        <h1 className="Contact-Page-Header2">
            CONTACT INFORMATION
        </h1>
        <div className="Contact-Page-ContentHolder">
            <p className="ContactDesc">As a lifelong innovator I'm intrigued by other's approaches, methodologies, principals, and strategies.  I enjoy teaching, learning and I very much welcome the opportunity to collaborate or brainstorm ideas. 
            </p>
            <p className="ContactDesc">Click on one of the links below to say hello!</p>
            <div></div>
        </div>
      </div>
    </div>
  );
}