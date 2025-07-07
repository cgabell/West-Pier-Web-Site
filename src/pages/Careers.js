import React from "react";
import { Link } from "react-router-dom";
import chair from "../assets/chair03.png";
import weoffer from "../assets/DRINKING.png";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';
import buttonImage from '../assets/button-image.png';

function Careers() {
  return (
    <>
      {/* Section 1: Intro */}

      <section className="section-alt overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>

        <div className="content">
          <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>JOIN OUR TEAM</h3>
          <p className="shadow-text">
            We’re always looking for passionate, talented people to join our team.
            Whether you're into coding, art, design or production — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Section 2: Culture & Benefits */}

      <section className="section-alt2 overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder2} alt="section overlay" className="section-overlay" />
  </div>
      <div className="two-column reverse">
        <div className="column-left">
          <div className="image-wrapper">
          <img src={chair} alt="Deck Chair" className="responsive-image" />
        </div>
      </div>

    <div className="column-right">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>WORKING AT WESTPIER</h3>
        <p className="shadow-text">
          Our studio is located in central Brighton. We’re close to both the beach and the train station.
          The big open-plan office features a great space for lunch, board games, and beers — plus, we offer
          two days of hybrid working each week.
        </p>
        <p className="shadow-text">
          We’re a passionate, talented, and friendly team with a strong focus on collaboration and creative freedom.
        </p>
        <p className="shadow-text">
          Our supportive culture helps people thrive and be the best version of themselves.
        </p>
        <div className="button-wrapper">
                <Link to="/studio" className="image-button-link">
                  <img src={buttonImage} alt="More Info" className="button-image" />
                  <span className="button-text">Studio</span>
                </Link>
              </div>
      </div>
    </div>
  </div>
</section>

<section className="section-alt5 overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>
  <div className="content">
    <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>WHY BRIGHTON</h3>
    <p className="shadow-text">
      Brighton is an amazing place to live — from its culture and coastal views to its buzzing nightlife.
      It’s vibrant, energetic, and packed with creativity.
    </p>
    <p className="shadow-text">
      Enjoy local pubs, top restaurants and cafés, great shopping, and events like Pride, Brighton Fringe,
      and a thriving art scene. There’s also a huge game development community, and we attend Develop Brighton each year.
    </p>
  </div>
</section>

{/* What we offer */}

<section className="section-alt6 overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder2} alt="section overlay" className="section-overlay" />
  </div>
  <div className="two-column">
    <div className="column-left">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>WHAT WE OFFER</h3>
        <p className="shadow-text">
          24 days holiday + 1 extra day per year of service - 
          Flexitime and hybrid working options - 
          Mental health support - 
          Nest pension scheme - 
          Supported learning & development - 
          Regular socials and access to an incredible board game library - 
          Location: Brighton, UK
        </p>
      </div>
    </div>

    <div className="column-right">
      <div className="image-wrapper">
        <img src={weoffer} alt="Device illustration" className="responsive-image" />
      </div>
    </div>
  </div>
</section>


      {/* Section 3: Application */}
      <section className="section-alt3 overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>
        <div className="content">
          <h3 className="shadow-title" style={{ '--title-color': '#51ae92' }}>HOW TO APPLY</h3>
          <p className="shadow-text">
            Email us your CV, portfolio, or just a quick intro:<br />
            <strong>careers@westpierstudio.com</strong>
          </p>
        </div>
      </section>
    </>
  );
}

export default Careers;