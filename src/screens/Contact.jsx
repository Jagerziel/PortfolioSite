// Import Components
import ContactPage from "../components/Contact/ContactPage.jsx";
// Import CSS
import "./Contact.css";

// Export Contact Function
export default function Contact() {

  // Return Div for Contact Container
  return (
    <div className="Contact-container">
      <div>
        <ContactPage />
      </div>
    </div>
  );
}