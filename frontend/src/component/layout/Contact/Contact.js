import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h2>Contact Us</h2>
      <div className="contactInfo">
        <p><strong>📍 Address:</strong> 456 Market Street, Downtown, New Delhi, India 110001</p>
        <p><strong>📞 Phone:</strong> +91 87654 32109</p>
        <p><strong>📧 Email:</strong> hello@grocerymart.com</p>
        <p><strong>🕐 Working Hours:</strong> Mon - Sun: 7:00 AM - 11:00 PM</p>
      </div>
      <a className="mailBtn" href="mailto:hello@grocerymart.com">
        <Button variant="contained" color="primary">Send Email</Button>
      </a>
    </div>
  );
};

export default Contact;
