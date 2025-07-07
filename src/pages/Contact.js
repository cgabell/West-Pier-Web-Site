import React from "react";
import { Link } from "react-router-dom";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';
import buttonImage from '../assets/button-image.png';

function Contact() {
  return (
    <>
      {/* Contact Message */}
      <section className="section-alt overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder1} alt="section overlay" className="section-overlay overlay-1" />
  </div>
        <div className="content">
          <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>LETS TALK</h3>
          <p className="shadow-text">Have a project in mind or just want to connect? We’d love to hear from you.</p>
        </div>
      </section>

     {/* Contact Form */}
<section className="section-full contact-section overlay-section overlay-3">
  <div className="overlay-wrapper">
    <img src={sectionborder2} alt="section overlay" className="section-overlay" />
  </div>

  <div className="form-container">
    <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>CONTACT US</h3>
    <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
      <button type="submit" className="button-link">Send</button>
    </form>
  </div>
</section>
    </>
  );
}

export default Contact;