// src/pages/Privacy.js
import React from "react";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';
import buttonImage from '../assets/button-image.png';

const Privacy = () => {
  return (
    <section className="section-alt2">
      <div className="content">
        <h2>Privacy Policy</h2>
        <p><strong>Last updated:</strong> [June 2025]</p>

        <h3>1. Who we are</h3>
        <p className="shadow-text">
          <strong>West Pier Studio</strong><br />
          Suite 1.2, 32 West Street, Phoenix House,<br />
          Brighton, BN1 2RT, UK<br />
          Email: <a href="mailto:info@westpierstudio.com">info@westpierstudio.com</a>
        </p>

        <h3>2. What data we collect</h3>
        <p className="shadow-text">We may collect:</p>
        <ul>
          <li>Your name and contact details (if you fill out a contact form)</li>
          <li>IP address and browser type</li>
          <li>Website usage data through analytics tools</li>
        </ul>

        <h3>3. How we use your data</h3>
        <ul>
          <li>To respond to enquiries or requests</li>
          <li>To improve website functionality and performance</li>
          <li>To monitor website traffic and usage</li>
        </ul>

        <h3>4. Legal basis for processing</h3>
        <p className="shadow-text">We process your data on the basis of consent and legitimate interests.</p>

        <h3>5. Data retention</h3>
        <p className="shadow-text">We retain data only as long as needed for the original purpose of collection.</p>

        <h3>6. Sharing your data</h3>
        <p className="shadow-text">We do not sell your data. We may share it with trusted service providers under confidentiality agreements.</p>

        <h3>7. Your rights</h3>
        <ul>
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw your consent</li>
          <li>Lodge a complaint with the Information Commissioner’s Office (ICO)</li>
        </ul>

        <h3>8. Cookies</h3>
        <p className="shadow-text">We use cookies to improve your experience. See our Cookie Policy for details.</p>

        <h3>9. Contact us</h3>
        <p className="shadow-text">If you have questions about this privacy policy or how we handle your data, contact us at:</p>
        <p className="shadow-text">
          West Pier Studio<br />
          Suite 1.2, 32 West Street, Phoenix House,<br />
          Brighton, BN1 2RT, UK<br />
          Email: <a href="mailto:info@westpierstudio.com">info@westpierstudio.com</a>
        </p>
      </div>
    </section>
  );
};

export default Privacy;