import React from "react";

function Contact() {
  return (
    <>
      {/* Contact Message */}
      <section className="section-alt">
        <div className="content">
          <h2>Let’s Talk</h2>
          <p>Have a project in mind or just want to connect? We’d love to hear from you.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-full contact-section">
        <div className="form-container">
          <h3>Contact Us</h3>
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