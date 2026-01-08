import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       <div className="footer-section">
          <h2>Social Media</h2>
          <ul className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> <i className="fab fa-facebook-f"></i></a>
           <a href="https://twitter.com" target="_blank" rel="noreferrer"> <i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </ul>
        </div>

        
        <div className="footer-section">
          <h2>Contact Details</h2>
           <p className="contact-item"><i className="fas fa-phone-alt"></i><span>+91-6476299908</span></p>
           <p className="contact-item"><i className="fas fa-envelope"></i><span>enquiry@bpmcemadhepura.org</span></p>           
           <p className="contact-item"><i className="fas fa-map-marker-alt"></i>
       <span>B P Mandal College of Engineering,<br />
       At-Majrahat, Singheshwar Road,<br />
       Madhepura - 852128, Bihar
      </span>
      </p>
        </div>

        
<div className="footer-section">
  <h2>Navigate</h2>
  <a
    href="https://www.google.com/maps/search/?api=1&query=BP+Mandal+College+of+Engineering+Madhepura"
    target="_blank"
    rel="noreferrer"
    className="map-link"
  >
    <img
      src={require("../assets/image.png")}
      alt="BPMCE Location Map"
      className="map-image"
    />
  </a>
</div>
</div>
     
    </footer>
  );
}

export default Footer;
