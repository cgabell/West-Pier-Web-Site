import React from "react";

function Studio() {
  return (
    <>
      {/* Who Are We */}
      <section className="section-alt">
        <div className="content">
          <h3>About us</h3>
          <p>
            Founded in 2011, West Pier Studio began with a focus on games and interactive software development, specifically work-for-hire development projects and co dev. Over the years, we’ve grown into a trusted, independent studio based in the vibrant city of Brighton & Hove, UK. Just a short stroll from the sea and the heart of Brighton’s creative community, our open-plan studio fosters collaboration, agility, and a strong team spirit. We’re proud to be a stable, people-first company, dedicated to delivering high-quality interactive experiences across a wide range of sectors.
          </p>
        </div>
      </section>

      {/* Key People */}
<section className="section-alt2">
  <div className="content">
    <h3>Key People</h3>

    <div className="profiles-grid">
      <div className="profile">
        <strong>Craig Gabell</strong> – General Manager
        <p>Craig oversees operations, business direction, and studio strategy, bringing decades of leadership experience in game and app development.</p>
      </div>

      <div className="profile">
        <strong>Dominic Jackson</strong> – Technical Director
        <p>Dominic leads our technical vision, architecture, and innovation across all projects, specialising in scalable systems and game engines.</p>
      </div>

      <div className="profile">
        <strong>Vassos Shiarlis</strong> – Director iGaming
        <p>Vassos drives our casino and slots development strategy, combining deep industry expertise with a focus on regulated markets.</p>
      </div>

      <div className="profile">
        <strong>Mike Parrot</strong> – Business Development
        <p>Mike builds and nurtures client relationships, uncovering new opportunities and helping partners realise their game ideas.</p>
      </div>

      <div className="profile">
        <strong>Annemarie Siklawi</strong> – HR Director
        <p>Annemarie ensures our team culture is positive, inclusive, and people-first — from recruitment through to long-term growth.</p>
      </div>

      <div className="profile">
        <strong>Andrew Glass</strong> – QA Director
        <p>Andrew leads quality assurance and testing strategy, helping us ship reliable, polished experiences across platforms.</p>
      </div>

      <div className="profile">
        <strong>Danny Turner</strong> – Technical Director Unity
        <p>Danny brings Unity mastery to the studio, guiding technical development for interactive and real-time 3D projects.</p>
      </div>

      <div className="profile">
        <strong>James Connely</strong> – Technical Director iGaming
        <p>James focuses on backend systems and client integrations for regulated iGaming, ensuring smooth, scalable delivery.</p>
      </div>
    </div>
  </div>
</section>

      {/* Studio Culture */}
      <section className="section-alt">
        <div className="content">
          <h3>Studio Culture</h3>
          <p>
            We believe in openness, creativity, and a healthy work-life balance. 
            Our team thrives on collaboration and continual learning.
          </p>
          <p>
            Want to join us? Check out our open positions.
          </p>
          <div className="button-wrapper">
            <a href="/careers" className="button-link">Careers</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Studio;