// src/pages/Cookies.js
import React from "react";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';
import buttonImage from '../assets/button-image.png';

const Cookies = () => {
  return (
    <section className="section-alt2">
      <div className="content">
        <h2>Cookie Policy</h2>
        <p><strong>Last updated:</strong> June 2025</p>

        <h3>1. What are cookies?</h3>
        <p className="shadow-text">
          Cookies are small text files stored on your device when you visit a website.
          They help improve user experience by remembering preferences and activity.
        </p>

        <h3>2. How we use cookies</h3>
        <p className="shadow-text">We use cookies to:</p>
        <ul>
          <li>Understand how visitors use our website</li>
          <li>Improve website functionality and performance</li>
          <li>Enhance your browsing experience</li>
        </ul>

        <h3>3. Types of cookies we use</h3>
        <ul>
          <li><strong>Essential cookies:</strong> Required for website operation</li>
          <li><strong>Analytics cookies:</strong> Help us analyse site usage (e.g., Google Analytics)</li>
        </ul>

        <h3>4. Managing cookies</h3>
        <p className="shadow-text">
          You can control or delete cookies through your browser settings. Disabling cookies may affect how the website functions.
        </p>

        <h3>5. Contact us</h3>
        <p className="shadow-text">
          If you have questions about our cookie policy, please contact us at:<br />
          Email: <a href="mailto:info@westpierstudio.com">info@westpierstudio.com</a>
        </p>
      </div>
    </section>
  );
};

export default Cookies;