import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

function Home() {
  return (
    <>
      {/* Slideshow */}
      <section className="section-alt slideshow-container" style={{ padding: 0, margin: 0 }}>
        <Slideshow />
      </section>

      {/* Who Are We */}
      <section className="section-alt">
        <div className="content">
          <h3>Who Are We?</h3>
          <p>
            An independent development studio based in the vibrant city of Brighton & Hove, UK. Just a short stroll from the sea, we design and build interactive experiences across industries — from games and apps to technical tools and back-end systems. We support projects from concept through to delivery, blending creativity with solid engineering.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-alt2">
        <div className="content">
      <h3>What We Do</h3>
          <p>
            We deliver a full spectrum of development services tailored to diverse industry needs. Our team designs and builds robust, future-ready applications — from mobile apps and SaaS platforms to structural engineering and architectural tools — with deep expertise in native iOS development, online payments, and educational software.
          </p>
          <p>
            In the gaming space, we co-develop high-performance titles using Unity and Unreal, producing everything from casual and educational games to AR/VR and metaverse experiences, while also supporting monetisation and cross-platform deployment.
          </p>
          <p>
            On the back end, we handle cloud infrastructure, database design, secure APIs, and server maintenance, ensuring stability and scalability across .NET, C#, SQL and NoSQL technologies. We also have a strong reputation in iGaming, specialising in the full-cycle development of slots, casino, and instant win games — known for our technical precision, reliability, and deep knowledge of regulated markets.
          </p>
          <div className="button-wrapper">
            <a href="/services" className="button-link">More Info</a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-alt">
        <div className="content">
          <h3>Need Help With a Project?</h3>
          <p>
            Whether you’re starting from scratch or need extra hands on an existing project, we’re here to help. Our team blends creativity, technical depth, and real-world experience to bring your ideas to life — on time and on budget.
          </p>
          <div className="button-wrapper">
            <a href="/services" className="button-link">See how we can help</a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section-alt2">
        <div className="content">
          <h3>About Us</h3>
          <p>
            Just a few hundred metres from the sea and the heart of Brighton’s iconic Lanes, our Studio is part of a vibrant and creative tech community. We’re a cheerful, collaborative team of multi-skilled developers who love what we do — whether it’s building great products, playing board games, or hanging out at local events. With a healthy mix of fun and focus, we’ve built a culture that values curiosity, quality, and community.
          </p>
          <div className="button-wrapper">
            <a href="/studio" className="button-link">About our studio</a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-alt">
        <div className="content" style={{ textAlign: "center" }}>
          <img
            src="/assets/clients.png"
            alt="Our Clients"
            style={{ maxWidth: "50%", height: "auto", marginTop: "1rem", borderRadius: "8px" }}
          />
        </div>
      </section>
    </>
  );
}

export default Home;