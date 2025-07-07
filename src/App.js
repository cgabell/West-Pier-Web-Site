// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import logo from "./assets/WPS_LOGO.png";
import "./App.css";
import buttonImage from './assets/button-image.png';
import headbar from './assets/headbar.png';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router basename="/West-Pier-Web-Site">
  <ScrollToTop />
  <div className="container">
  <nav
    className="navbar"
    style={{
      backgroundImage: `url(${headbar})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(81, 174, 146, 0.85)', // optional tint
    }}
  >
    <div className="navbar-inner">
      <div className="logo-container">
  <Link to="/">
    <img src={logo} alt="West Pier Studio logo" className="logo" />
  </Link>
</div>
  

    <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
      {menuOpen ? "✕" : "☰"}
    </button>

    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
  <li>
    <Link to="/" className="image-button-link" onClick={closeMenu}>
      <img src={buttonImage} alt="Home" className="button-image" />
      <span>Home</span>
    </Link>
  </li>
  <li>
    <Link to="/studio" className="image-button-link" onClick={closeMenu}>
      <img src={buttonImage} alt="Studio" className="button-image" />
      <span>Studio</span>
    </Link>
  </li>
  <li>
    <Link to="/services" className="image-button-link" onClick={closeMenu}>
      <img src={buttonImage} alt="Services" className="button-image" />
      <span>Services</span>
    </Link>
  </li>
  <li>
    <Link to="/projects" className="image-button-link" onClick={closeMenu}>
      <img src={buttonImage} alt="Projects" className="button-image" />
      <span>Projects</span>
    </Link>
  </li>
  <li>
    <Link to="/careers" className="image-button-link" onClick={closeMenu}>
      <img src={buttonImage} alt="Careers" className="button-image" />
      <span>Careers</span>
    </Link>
  </li>
  <li>
    <Link to="/contact" className="image-button-link" onClick={closeMenu}>
      <img src={buttonImage} alt="Contact" className="button-image" />
      <span>Contact</span>
    </Link>
  </li>
</ul>
  </div>
</nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;