import React from "react";
import { Link } from "react-router-dom";
import seagul2 from "../assets/seagul2.png";
import boardgame from "../assets/boardgame02.png";
import craig from "../assets/craig.png";
import annemarie from "../assets/Annemarie.png";
import vas from "../assets/vas.png";
import dom from "../assets/dom.png";
import glassy from "../assets/glassy.png";
import james from "../assets/james.png";
import danny from "../assets/danny.png";
import mike from "../assets/mike.png";
import chips2 from "../assets/VR copy.png";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';
import buttonImage from '../assets/button-image.png';

function Studio() {
  return (
    <>
      {/* About Us */}
      <section className="section-alt overlay-section">
        <div className="overlay-wrapper">
          <img src={sectionborder} alt="section overlay" className="section-overlay" />
        </div>
        <div className="content">
          <h3 className="shadow-title" style={{ '--title-color': '#52ae92' }}>ABOUT US</h3>
          <p className="shadow-text">
            Founded in 2011, West Pier Studio began with a focus on games and interactive software development, specifically work-for-hire development projects and co dev. Over the years, we’ve grown into a trusted, independent studio based in the vibrant city of Brighton & Hove, UK. Just a short stroll from the sea and the heart of Brighton’s creative community, our open-plan studio fosters collaboration, agility, and a strong team spirit. We’re proud to be a stable, people-first company, dedicated to delivering high-quality interactive experiences across a wide range of sectors.
          </p>
        </div>
      </section>

      {/* Key People */}
      <section className="section-alt2 overlay-section overlay-2">
        <div className="overlay-wrapper">
          <img src={sectionborder2} alt="section overlay" className="section-overlay" />
        </div>
        <div className="content">
          <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>KEY PEOPLE</h3>
          <div className="profiles-grid">
            <div className="profile">
              <img src={craig} alt="Craig Gabell" className="profile-image" />
              <div className="profile-text">
                <strong>Craig Gabell</strong> – General Manager
                <p className="shadow-text">
                  Craig oversees operations, business direction, and studio strategy, bringing decades of leadership experience in game and app development.
                </p>
              </div>
            </div>
            <div className="profile">
              <img src={dom} alt="Dom" className="profile-image" />
              <div className="profile-text">
                <strong>Dominic Jackson</strong> – Technical Director
                <p className="shadow-text">Dominic leads our technical vision, architecture, and innovation across all projects, specialising in scalable systems and game engines.</p>
              </div>
            </div>
            <div className="profile">
              <img src={vas} alt="Vas" className="profile-image" />
              <div className="profile-text">
                <strong>Vassos Shiarlis</strong> – Director iGaming
                <p className="shadow-text">Vassos drives our casino and slots development strategy, combining deep industry expertise with a focus on regulated markets.</p>
              </div>
            </div>
            <div className="profile">
              <img src={mike} alt="Mike" className="profile-image" />
              <div className="profile-text">
                <strong>Mike Parrott</strong> – Business Development
                <p className="shadow-text">Mike builds and nurtures client relationships, uncovering new opportunities and helping partners realise their game ideas.</p>
              </div>
            </div>
            <div className="profile">
              <img src={annemarie} alt="Annemarie" className="profile-image" />
              <div className="profile-text">
                <strong>Annemarie Siklawi</strong> – HR Director
                <p className="shadow-text">Annemarie ensures our team culture is positive, inclusive, and people-first — from recruitment through to long-term growth.</p>
              </div>
            </div>
            <div className="profile">
              <img src={glassy} alt="Glassy" className="profile-image" />
              <div className="profile-text">
                <strong>Andrew Glass</strong> – QA Director
                <p className="shadow-text">Andrew leads quality assurance and testing strategy, helping us ship reliable, polished experiences across platforms.</p>
              </div>
            </div>
            <div className="profile">
              <img src={danny} alt="Danny" className="profile-image" />
              <div className="profile-text">
                <strong>Danny Turner</strong> – Technical Director Unity
                <p className="shadow-text">Danny brings Unity mastery to the studio, guiding technical development for interactive and real-time 3D projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Culture */}
      <section className="section-alt3 overlay-section overlay-3">
        <div className="overlay-wrapper">
          <img src={sectionborder} alt="section overlay" className="section-overlay" />
        </div>
        <div className="two-column">
          <div className="column-left">
            <div className="content">
              <h3 className="shadow-title" style={{ '--title-color': '#51ae92' }}>STUDIO CULTURE</h3>
              <p>
                We believe in openness, creativity, and a healthy work-life balance. Our open-plan studio fosters a collaborative atmosphere where ideas are shared freely and everyone has a voice. Whether you’re a developer, designer, or intern, we value inclusive decision-making and encourage input at every stage of a project. We regularly come together for team board game sessions, social events, and creative workshops, strengthening both our craft and our connections. It’s a place where learning never stops and where people genuinely enjoy working together.
              </p>
              <p>
                Want to join us? Check out our open positions.
              </p>
              <div className="button-wrapper">
                <Link to="/careers" className="image-button-link">
                  <img src={buttonImage} alt="More Info" className="button-image" />
                  <span className="button-text">Careers</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="column-right">
            <div className="image-wrapper">
              <img src={chips2} alt="Team playing board games" className="responsive-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Studio;