import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";
import logo from "./Assets/WPS_LOGO.png";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="West Pier Studio logo" className="logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/" className="button-link">Home</Link></li>
            <li><Link to="/studio" className="button-link">Studio</Link></li>
            <li><Link to="/services" className="button-link">Services</Link></li>
            <li><Link to="/careers" className="button-link">Careers</Link></li>
            <li><Link to="/contact" className="button-link">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;