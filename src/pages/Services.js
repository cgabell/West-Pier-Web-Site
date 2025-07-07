import React from "react";
import device from "../assets/device.png";
import unity from "../assets/unity_unreal.png";
import wpg from "../assets/wpg.png";
import backend from "../assets/backend.png";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';
import buttonImage from '../assets/button-image.png';

function Services() {
  return (
    <>
{/* Intro Section */}

      <section className="section-alt4 overlay-section overlay-1">
  <div className="overlay-wrapper">
    <img src={sectionborder1} alt="section overlay" className="section-overlay" />
  </div>
        <div className="content">
          <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>OUR SERVICES</h3>
          <p className="shadow-text">
            We combine creative, technical, and production expertise to deliver full-service game and interactive development.
          </p>
        </div>
      </section>

{/* App Development */}

  <section className="section-alt3 overlay-section overlay-2">
  <div className="overlay-wrapper">
    <img src={sectionborder2} alt="section overlay" className="section-overlay" />
  </div>
  <div className="two-column">
    <div className="column-left">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#52ae92' }}>APP DEVELOPMENT</h3>
        <p className="shadow-text">
          We design and develop robust, scalable applications tailored to your specific needs — whether it’s a mobile app, SaaS product, or a highly specialised technical solution. Our expertise spans native iOS development (Objective-C & Swift), online payment systems, educational software, and complex engineering or architectural tools. Whether upgrading legacy systems or building from the ground up, we deliver reliable, future-ready results.
        </p>
      </div>
    </div>

    <div className="column-right">
      <div className="image-wrapper">
        <img src={device} alt="Device illustration" className="responsive-image" />
      </div>
    </div>
  </div>
</section>

{/* Game Development */}

  <section className="section-alt5 overlay-section overlay-3">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>
    <div className="two-column reverse">
      <div className="column-left">
        <div className="image-wrapper">
          <img src={unity} alt="Unity logo" className="responsive-image" />
        </div>
      </div>
    
      <div className="column-right">
        <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>GAME DEVELOPMENT</h3>
        <p className="shadow-text">
          We co-develop engaging, high-performance games using Unity (C#) and Unreal (C++), ranging from casual mobile titles to educational and serious games. Our work extends into immersive technologies such as AR, VR, and the metaverse. We also bring commercial insight to every project — supporting monetisation, cross-platform deployment, and long-term content strategies.
        </p>
        </div>
      </div>
    </div>
</section>

{/* Backend Development */}
<section className="section-alt2 overlay-section overlay-3">
  <div className="overlay-wrapper">
    <img src={sectionborder1} alt="section overlay" className="section-overlay" />
  </div>
  <div className="two-column">
    <div className="column-left">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#52ae92' }}>BACK END DEVELOPMENT</h3>
        <p className="shadow-text">
          Our team builds and maintains the secure, scalable backend infrastructure that powers modern applications. From cloud architecture and database design to custom APIs and system integrations, we cover the full spectrum of backend development.
        </p>
        <p className="shadow-text">
          We work across technologies like .NET, C#, SQL, and NoSQL, and offer server support, patching, and performance optimisation for long-term reliability.
        </p>
      </div>
    </div>

    <div className="column-right">
      <div className="image-wrapper">
        <img src={backend} alt="backend icon" className="responsive-image" />
      </div>
    </div>
  </div>
</section>

{/* iGaming Development */}

<section className="section-alt3 overlay-section overlay-3">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>
      <div className="two-column reverse">
        <div className="column-left">
          <div className="image-wrapper">
          <a href="https://www.westpiergaming.com" target="_blank" rel="noopener noreferrer">
  <img src={wpg} alt="WPG Logo" className="responsive-image" />
</a>
        </div>
      </div>
    
    <div className="column-right">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#52ae92' }}>iGAMING</h3>
        <p className="shadow-text">
          We specialise in full-cycle development for slot, casino, and instant win games. Known for our strong technical delivery and deep understanding of regulated markets, we support every phase — from concept and design through to live deployment and ongoing maintenance. Our iGaming partners trust us to deliver secure, engaging products that meet both creative and compliance standards.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Services;