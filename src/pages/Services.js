import React from "react";

function Services() {
  return (
    <>
      {/* Intro Section */}
      <section className="section-alt">
        <div className="content">
          <h2>Our Services</h2>
          <p>
            We combine creative, technical, and production expertise to deliver full-service game and interactive development.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-alt2">
        <div className="content">
          <p>
            <strong>App Development:</strong> We design and develop robust, scalable applications tailored to your specific needs — whether it’s a mobile app, SaaS product, or a highly specialised technical solution. Our expertise spans native iOS development (Objective-C & Swift), online payment systems, educational software, and complex engineering or architectural tools. Whether upgrading legacy systems or building from the ground up, we deliver reliable, future-ready results.
          </p>

          <p>
            <strong>Game Development:</strong> We co-develop engaging, high-performance games using Unity (C#) and Unreal (C++), ranging from casual mobile titles to educational and serious games. Our work extends into immersive technologies such as AR, VR, and the metaverse. We also bring commercial insight to every project — supporting monetisation, cross-platform deployment, and long-term content strategies.
          </p>

          <p>
            <strong>Back-end Development:</strong> Our team builds and maintains the secure, scalable backend infrastructure that powers modern applications. From cloud architecture and database design to custom APIs and system integrations, we cover the full spectrum of backend development. We work across technologies like .NET, C#, SQL, and NoSQL, and offer server support, patching, and performance optimisation for long-term reliability.
          </p>

          <p>
            <strong>iGaming:</strong> We specialise in full-cycle development for slot, casino, and instant win games. Known for our strong technical delivery and deep understanding of regulated markets, we support every phase — from concept and design through to live deployment and ongoing maintenance. Our iGaming partners trust us to deliver secure, engaging products that meet both creative and compliance standards.
          </p>
        </div>
      </section>
    </>
  );
}

export default Services;