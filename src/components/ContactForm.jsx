import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State for submission

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show the message box when submitted
  };

  return (
    <div className="contact-form-wrapper">
      <h2 className="form-heading">Want to hear from us?</h2>

      <div className="form-container">
        {/* Left Section with Image */}
        <div className="form-image">
          <img src="/images/yogaposter.jpg" alt="Contact Us" />
        </div>

        {/* Right Section with Form */}
        <div className="form-content">
          {isSubmitted ? (
            <div className="submission-message">
              <h3>Thank you!</h3>
              <p>We will reach out to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" rows="5" required />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
