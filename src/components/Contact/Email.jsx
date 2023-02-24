// Import Module
import { useState, useRef } from "react";

// Import Components

// Import CSS
import "./Email.css";
// Import Icons

// Export About Function
export default function Email() {
    const [email , setEmail] = useState("")
    // Return Div for About Container

    const form = useRef();
 
    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
    // emailjs.sendForm( form.current )
    //     .then((result) => {
    //         // show the user a success message
    //     }, (error) => {
    //         // show the user an error
    //     });
    };




    return (
        <div className="Email-Page-container">
            <div className="Email-Page-container-overlay">
                <div className="Email-Page-Header">
                    Reach Out Directly
                </div>
                <div className="Email-Page-ContentHolder">
                    <div className="Email-Form-Holder">
                        <form ref={form} onSubmit={sendEmail} className="EmailForm">
                            <label id="label">Name</label>
                            <input type="text" name="user_name" id="label"/>
                            <label id="label">Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}