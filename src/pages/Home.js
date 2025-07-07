import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import clients from "../assets/clients.png";
import desk from "../assets/deskw.png";
import pier from "../assets/pier02.png";
import jigsaw from "../assets/jigsaw.png";
import chips from "../assets/CHIPS.png";
import buttonImage from '../assets/button-image.png';
import buttonImageG from '../assets/button-imageg.png';
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';

function Home() {
  return (
    <>
      {/*
<section className="section-alt slideshow-container" style={{ padding: 0, margin: 0 }}>
  <Slideshow />
</section>
*/}

{/* Who Are We */}

  <section className="section-alt overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder2} alt="section overlay" className="section-overlay" />
  </div>
  <div className="two-column">
    <div className="column-left">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>WHO ARE WE?</h3>
        <p className="shadow-text">An independent development studio based in the vibrant city of Brighton & Hove, UK. Just a short stroll from the sea, we design and build interactive experiences across industries — from games and apps to technical tools and back-end systems. We support projects from concept through to delivery, blending creativity with solid engineering.</p>
      </div>
    </div>

    <div className="column-right">
      <div className="image-wrapper">
        <img src={chips} alt="Device illustration" className="responsive-image" />
      </div>
    </div>
  </div>
</section>


      {/* What We Do */}

<section className="section-alt3 overlay-section">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>

  <div className="two-column">
    <div className="column-left">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#51ae92' }}>WHAT WE DO?</h3>
        <p className="shadow-text">
          We deliver a full spectrum of development services tailored to diverse industry needs. Our team designs and builds robust, future-ready applications — from mobile apps and SaaS platforms to structural engineering and architectural tools — with deep expertise in native iOS development, online payments, and educational software.
        </p>
        <p className="shadow-text">
          In the gaming space, we co-develop high-performance titles using Unity and Unreal, producing everything from casual and educational games to AR/VR and metaverse experiences, while also supporting monetisation and cross-platform deployment.
        </p>
        <p className="shadow-text">
          On the back end, we handle cloud infrastructure, database design, secure APIs, and server maintenance, ensuring stability and scalability across .NET, C#, SQL and NoSQL technologies. We also have a strong reputation in iGaming, specialising in the full-cycle development of slots, casino, and instant win games — known for our technical precision, reliability, and deep knowledge of regulated markets.
        </p>
        <div className="button-wrapper">
          <Link to="/services" className="image-button-link">
            <img src={buttonImage} alt="More Info" className="button-image" />
            <span className="button-text">More Info</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* About Us */}

<section className="section-alt6 overlay-section overlay">
  <div className="overlay-wrapper">
    <img src={sectionborder2} alt="section overlay" className="section-overlay" />
  </div>

  <div className="two-column reverse">
    <div className="column-left">
      <div className="image-wrapper">
        <img src={desk} alt="West Pier" className="responsive-image" />
      </div>
    </div>

    <div className="column-right">
      <div className="content">
        <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>ABOUT US</h3>
        <p className="shadow-text">
          Just a few hundred metres from the sea and the heart of Brighton’s iconic Lanes, our Studio is part of a vibrant and creative tech community. We’re a cheerful, collaborative team of multi-skilled developers who love what we do — whether it’s building great products, playing board games, or hanging out at local events. With a healthy mix of fun and focus, we’ve built a culture that values curiosity, quality, and community.
        </p>
        <div className="button-wrapper">
          <Link to="/studio" className="image-button-link">
            <img src={buttonImage} alt="Studio" className="button-image" />
            <span className="button-text">More Info</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Clients */}

           <section className="section-alt5 overlay-section overlay-1">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>

  <div className="content" style={{ textAlign: "center" }}>
    <img
      src={clients}
      alt="Our Clients"
      style={{ 
        maxWidth: "100%", 
        height: "auto", 
        marginTop: "1rem", 
        borderRadius: "8px" 
      }}
    />
  </div>
</section>
    </>
  );
}

export default Home;