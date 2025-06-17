import React from "react";

function Careers() {
  return (
    <>
      {/* Section 1: Intro */}
      <section className="section-alt">
        <div className="content">
          <h3>Join Our Team</h3>
          <p>
            We’re always looking for passionate, talented people to join our team.
            Whether you're into coding, art, design or production — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Section 2: Culture & Benefits */}
      <section className="section-alt2">
        <div className="content">
          <h3>Working at West Pier</h3>
          <p>
            Our studio is located in central Brighton. We’re close to both the beach and the train station.
            The big open-plan office features a great space for lunch, board games, and beers — plus, we offer
            two days of hybrid working each week.
          </p>
          <p>
            We’re a passionate, talented, and friendly team with a strong focus on collaboration and creative freedom.
          </p>
          <p>
            Our supportive culture helps people thrive and be the best version of themselves.
          </p>

          <h3>Why Brighton?</h3>
          <p>
            Brighton is an amazing place to live — from its culture and coastal views to its buzzing nightlife.
            It’s vibrant, energetic, and packed with creativity.
          </p>
          <p>
            Enjoy local pubs, top restaurants and cafés, great shopping, and events like Pride, Brighton Fringe,
            and a thriving art scene. There’s also a huge game development community, and we attend Develop Brighton each year.
          </p>

          <h3>What We Offer:</h3>
          <ul>
            <li>24 days holiday + 1 extra day per year of service</li>
            <li>Flexitime and hybrid working options</li>
            <li>Mental health support</li>
            <li>Nest pension scheme</li>
            <li>Supported learning & development</li>
            <li>Regular socials and access to an incredible board game library</li>
            <li>Location: Brighton, UK</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Application */}
      <section className="section-alt">
        <div className="content">
          <h3>How to Apply</h3>
          <p>
            Email us your CV, portfolio, or just a quick intro:<br />
            <strong>careers@westpierstudio.com</strong>
          </p>
        </div>
      </section>
    </>
  );
}

export default Careers;