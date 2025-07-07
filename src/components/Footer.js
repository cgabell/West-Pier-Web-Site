import React from "react";
import x from "../assets/x.png";
import inst from "../assets/inst.png";
import fb from "../assets/fb.png";
import linkedIn from "../assets/Linkedin.png";
import tiktok from "../assets/tictoc.png";
import { Link } from "react-router-dom";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';

function Footer() {
  return (
    <footer className="footer overlay-section overlay-2">
      <div className="overlay-wrapper">
        <img src={sectionborder2} alt="footer overlay" className="section-overlay" />
      </div>

      <div className="footer-columns">
        <div className="contact-details">
          <h3 className="shadow-title" style={{ '--title-color': '#e68e6b' }}>ADDRESS:</h3>
          <p className="shadow-text">
            <span className="footer-info">Suite 1.2, Phoenix House, 32 West Street, Brighton BN12RT, UK</span>
          </p>
        </div>

        <div className="social-links">
          <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>FOLLOW US</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/westpierstudio_brighton/" target="_blank" rel="noopener noreferrer">
              <img src={inst} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/WestPierStudio" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/west-pier-studio/mycompany/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="shadow-text">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </p>
        <p className="shadow-text">© West Pier Studio Ltd 2025</p>
      </div>
    </footer>
  );
}

export default Footer;