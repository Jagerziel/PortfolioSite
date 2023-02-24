// Import Components
import ContactPage from "../components/Contact/ContactPage.jsx";
import Email from "../components/Contact/Email.jsx";
// Import CSS
import "./Contact.css";

// Export Contact Function
export default function Contact() {

  // Return Div for Contact Container
  return (
    <div className="Contact-container">
      <div>
        <ContactPage />
        <Email />
      </div>
    </div>
  );
}