import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import logo from './Assets/WPS_LOGO.png';
import "./App.css";

function App() {
  return (
    <Router basename="/West-Pier-Web-Site">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="West Pier Studio logo" className="logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/studio">Studio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;