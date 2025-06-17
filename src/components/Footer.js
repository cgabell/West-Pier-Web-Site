import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="contact-details">
          <h3>Reach us directly:</h3>
          <p><strong className="footer-label">Email:</strong> <span className="footer-info">hello@westpierstudio.com</span></p>
<p><strong className="footer-label">Address:</strong> <span className="footer-info">Suite 1.2, Phoenix House, 32 West Street, Brighton BN12RT, UK</span></p>
        </div>

        <div className="social-links">
          <h3>Follow us:</h3>
          <div className="social-icons">
            <a href="https://x.com/westpierstudio" target="_blank" rel="noopener noreferrer">
              <img src="/assets/x.png" alt="X (Twitter)" />
            </a>
            <a href="https://www.instagram.com/westpierstudio_brighton/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/inst.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/WestPierStudio" target="_blank" rel="noopener noreferrer">
              <img src="/assets/fb.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/west-pier-studio/mycompany/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/assets/tictoc.png" alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
  <a href="/privacy">Privacy</a> |{" "}
  <a href="/cookies">Cookie Policy</a> |{" "}
  © West Pier Studio Ltd 2025
</div>
    </footer>
  );
}

export default Footer;