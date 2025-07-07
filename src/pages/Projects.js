import React from "react";
import deckplanner from "../assets/deckplanner.png";
import utalk from "../assets/utalk.png";
import fence from "../assets/fenceplanner.png";
import pergola from "../assets/pergolaplanner.png";
import myvirtual from "../assets/myvirtualspace.png";
import bathstore from "../assets/bathstore.png";
import oldhouse from "../assets/oldhouse.png";
import mixed from "../assets/mixed.png";
import minigames from "../assets/minigames.png";
import iGaming from "../assets/iGaming.png";
import VR from "../assets/vr.png";
import casino from "../assets/casino.png";
import SST from "../assets/sst.png";
import HighUp from "../assets/highup.png";
import Scratchcard from "../assets/scratchcards.png";
import Licence from "../assets/licence.png";
import sectionborder from '../assets/overlay.png'; 
import sectionborder1 from '../assets/overlay1.png';
import sectionborder2 from '../assets/overlay2.png';
import sectionborder3 from '../assets/overlay3.png';
import buttonImage from '../assets/button-image.png';

const Projects = () => {
  return (
    <div>

        {/* Intro Section */}
      <section className="section-alt4 overlay-section overlay-3">
  <div className="overlay-wrapper">
    <img src={sectionborder} alt="section overlay" className="section-overlay" />
  </div>
        <div className="content">
          <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>OUR PROJECTS</h3>
          <p className="shadow-text">
            We are an experienced and versatile development team specialising in interactive digital experiences across web, mobile, AR, VR, and real money gaming. Our portfolio spans a wide range of commercial projects — from structural design tools like Deck Planner, Fence Planner, and Pergola Planner, to immersive retail and educational experiences such as Bathstore AR, My Virtual Space, and mixed reality training simulations. We’ve also built regulated casino content, real money mini games, and large-scale multilingual applications like uTalk.

Our expertise includes Unity, WebGL, HTML5, mobile optimisation, intuitive UI/UX design, real-time 3D visualisation, and platform integration. Whether building for consumers, enterprise clients, or regulated environments, we deliver polished, scalable products that combine technical depth with user-focused design.
          </p>
        </div>
      </section>

      {/* DeckPlanner – Image on Right */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>DECK PLANNER</h3>
      <p>
        We developed Deck Planner as a powerful yet user-friendly deck design application for WebGL and mobile platforms using Unity. It enables both engineers and homeowners to intuitively create custom deck layouts with precision. The tool supports real-time 3D design, structural editing, and smart snapping features, ensuring accurate and professional results. Upon completion, users can generate a detailed construction output including scale drawings, material lists, and support diagrams. Deck Planner combines technical capability with accessibility, making it a valuable solution for DIY users, contractors, and retailers seeking a streamlined design-to-build experience.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={deckplanner} alt="DeckPlanner" />
  </div>
</section>

{/* Old House New Home – Image on Right */}
      <section className="split-section reverse">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>OLD HOUSE NEW HOME</h3>
      <p>
        Old House New Home was an augmented reality project developed in collaboration with George Clarke’s Channel 4 series. Designed for mobile devices, the app allows homeowners to visualise and configure interior design models such as kitchens and room layouts in real time using AR. Users can place, scale, and customise virtual furnishings within their actual living spaces, enabling faster and more confident design decisions. Built to be intuitive and immersive, the tool bridges the gap between imagination and implementation, bringing professional-grade visualisation to everyday users planning home transformations.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={oldhouse} alt="Old House New Home" />
  </div>
</section>

{/* Pergola Planner – Image on Right */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>PERGOLA PLANNER</h3>
      <p className="shadow-text">
       Pergola Planner is a 3D design application developed using Unity for WebGL, enabling users to create custom pergola structures with ease. Tailored for both homeowners and professionals, it offers an intuitive drag-and-drop interface, smart alignment tools, and real-time 3D visualisation to bring outdoor living spaces to life. Users can configure dimensions, materials, and layouts to suit their needs, then generate detailed construction outputs including plans, material lists, and assembly guides. Pergola Planner streamlines the design-to-build process, making it ideal for DIY projects, retailers, and contractors focused on outdoor structures.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={pergola} alt="Pergola Planner" />
  </div>
</section>

      {/* uTalk – Image on Left */}
      <section className="split-section reverse">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>uTALK</h3>
      <p className="shadow-text">
        uTalk is a commercial language-learning platform we helped develop to support 150+ languages and over 20,000 language pairings. Designed for broad accessibility, the app allows users to learn key words and phrases from their own native language, ideal for both consumer and enterprise use. Built for mobile and desktop, it features real audio from native speakers, interactive pronunciation practice, and memory-boosting games. Its modular topic-based structure makes it well-suited to global teams, educational licensing, and platform integrations. uTalk combines strong linguistic content with intuitive UX to deliver a scalable, multilingual learning experience.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={utalk} alt="uTalk" />
  </div>
</section>

{/* HighUp – Image on Left */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>HIGHUP</h3>
      <p className="shadow-text">
        High Up is an interactive demo developed using Unreal Engine for PlayStation 5, showcasing our expertise in next-gen console development. Set in a stylised, casual world, players can build and customise vehicles using modular parts, with full control over colour, components, decals, and stickers. The experience highlights intuitive controls, dynamic UI, and smooth real-time rendering — all optimised for PS5 performance. High Up encourages creativity and experimentation, blending visual customisation with playful interaction. The project demonstrates our ability to deliver polished, interactive console experiences that combine strong artistic direction with technical precision.      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={HighUp} alt="HighUp" />
  </div>
</section>

 {/* Virtual Reality – Image on Left */}
      <section className="split-section reverse">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>VR CONFIGURATORS</h3>
      <p className="shadow-text">
        We have developed numerous VR Configurators, immersive product configuration experiences built using Unity, with a strong focus on intuitive VR head-controlled UI. Our research and development emphasised natural interaction models that eliminate the need for traditional controllers, allowing users to navigate, select, and customise products through simple head movements. Designed for VR headsets, these configurators are ideal for industries such as automotive, interior design, and retail, where spatial context enhances decision-making. The result is a seamless, hands-free experience that brings products to life through interactive, real-time visualisation in a fully immersive environment.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={VR} alt="Virtual Reality" />
  </div>
</section>

{/* Casino Games – Image on Right */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>CASINO GAMES</h3>
      <p className="shadow-text">
        We have extensive experience developing real money casino table games, including roulette and other classic titles, for regulated online gaming markets. Our team has delivered fully interactive, high-performance games built in HTML5, with precise RNG logic, accurate game rules, and responsive UI/UX tailored for both desktop and mobile play. Our work includes front-end and server-side development, seamless wallet integration, and adherence to certification standards across multiple jurisdictions. We combine strong mathematical modelling with regulatory awareness to ensure fair, compliant, and commercially successful gaming experiences.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={casino} alt="Casino Games" />
  </div>
</section>

 {/* Mini Games – Image on Left */}
      <section className="split-section reverse">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>MINI GAMES</h3>
      <p className="shadow-text">
        Mini Games are real money gaming experiences developed for mobile, designed to look and feel like familiar casual games while operating within regulated gambling frameworks. These games combine simple, engaging mechanics with real money outcomes, appealing to players who enjoy quick, snackable gameplay. Built with lightweight HTML5 and mobile-optimised design, Mini Games offer smooth performance, intuitive controls, and seamless wallet integration. We focused on blending casual game aesthetics with certified RNG logic and compliance standards, creating a new category of accessible, real money games aimed at attracting broader, mobile-first audiences.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={minigames} alt="Mini Games" />
  </div>
</section>

{/* SLots – Image on Right */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>SLOTS</h3>
      <p className="shadow-text">
        We’ve developed hundreds of real money online slot games for operators and platform providers, delivering engaging, high-performance content in HTML5 for cross-platform play. Our expertise spans the full game development cycle, including concept design, math modelling, art, animation, sound, front-end coding, and RGS integration. Our team builds games to meet strict regulatory and technical standards across jurisdictions like the UKGC and MGA. We focus on creating distinctive gameplay with balanced math profiles, strong retention mechanics, and smooth performance — tailored for success in the competitive slots market.
    </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={iGaming} alt="iGaming" />
  </div>
</section>

{/* Scratch Cards – Image on Left */}
      <section className="split-section reverse">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>SCRATCH CARD GAMES</h3>
      <p className="shadow-text">
        We have developed a range of real money interactive scratch cards, designed to combine instant-win excitement with engaging visuals and smooth user interaction. Built in HTML5 for mobile and desktop platforms, our scratch cards replicate the tactile satisfaction of physical cards while offering enhanced features like animations, themed mechanics, and bonus rounds. Each game is built around certified RNG logic and adheres to regulatory requirements for real money gaming. With a focus on retention, accessibility, and performance, our scratch cards deliver fast, rewarding experiences that appeal to both casual players and dedicated casino audiences.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={Scratchcard} alt="Scratchcards" />
  </div>
</section>


{/* Branded Slots – Image on Right */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>BRANDED SLOTS</h3>
      <p className="shadow-text">
        We have developed some of the most popular branded real money slot games on the market, including household names like Monopoly and Double Bubble. These projects required close collaboration with major IP holders to ensure brand fidelity while delivering engaging, high-performing slot experiences for regulated markets. Built in HTML5 for mobile and desktop, our branded slots combine proven math models with custom art, animation, and audio that reflect each brand’s identity. From concept to certification, we handle every aspect of development — creating branded content that’s both commercially successful and instantly recognisable to players.
        </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={Licence} alt="Brands" />
  </div>
</section>

{/* Fence Planner – Image on Left */}
      <section className="split-section reverse">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>FENCE PLANNER</h3>
      <p className="shadow-text">
      Fence Planner is a 3D structural design tool developed using Unity for WebGL and mobile, enabling users to design and visualise custom fence layouts in a virtual backyard setting. Built for homeowners, contractors, and retailers, the app offers intuitive tools for placing panels, posts, and gates with accurate measurements and real-time 3D feedback. Users can configure styles, materials, and dimensions to suit their property, then generate detailed output including construction plans and material lists. Fence Planner simplifies the design-to-build process, helping users confidently plan outdoor projects with precision and ease.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={fence} alt="Fence Planner" />
  </div>
</section>

      {/* Bathstore – Image on Left */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>BATHSTORE AR</h3>
      <p className="shadow-text">
       Bathstore AR was developed for the UK’s leading bathroom retailer to empower sales staff and customers with real-time bathroom design in augmented reality. Built for mobile devices, the app allows users to place, configure, and explore bathroom layouts in their actual space, enhancing confidence and purchase decisions. It integrates seamlessly with ArtiCAD, enabling professional designers to export 3D bathroom plans directly into the app for AR visualisation. This solution bridged the gap between showroom and home, offering a powerful sales and design tool that made complex bathroom planning more accessible and interactive.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={bathstore} alt="Bathstore" />
  </div>
</section>

      {/* Mixed Reality – Image on Left */}
      <section className="split-section reverse">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>MINE DISPOSAL - MIXED REALITY</h3>
      <p className="shadow-text">
        We developed a mixed reality training experience focused on mine disposal, using Microsoft HoloLens and mobile platforms. Designed as a gamified simulation, the experience guides users through the safe disarmament of a Russian anti-personnel mine in a controlled, interactive environment. Built to raise awareness and support field education, the project addresses the growing global issue of abandoned mines. By combining realistic 3D models, gesture-based interaction, and step-by-step training, the solution offers a powerful tool for humanitarian organisations and defence personnel seeking innovative ways to improve safety and preparedness in mine-affected regions.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={mixed} alt="Mixed Reality" />
  </div>
</section>

{/* My Virtual Space – Image on Right */}
      <section className="split-section">
  <div className="text-third text-light">
    <div className="text-content">
      <h3 className="shadow-title" style={{ '--title-color': '#e48041' }}>MY VIRTUAL SPACE</h3>
      <p className="shadow-text">
       My Virtual Space was an original West Pier project developed to help users showcase their own retail products using both augmented and virtual reality. Built with an intuitive UI/UX, the platform allowed seamless switching between AR and VR modes, providing flexible presentation options across devices. Users could create accounts, upload products, and configure immersive environments to visualise items in realistic 3D settings. Designed for accessibility and visual impact, My Virtual Space offered a forward-thinking solution for retailers, designers, and marketers looking to engage customers through interactive product experiences in emerging digital formats.
      </p>
    </div>
  </div>
  <div className="image-two-thirds">
    <img src={myvirtual} alt="My Virtual Space" />
  </div>
</section>

    </div>
  );
};

export default Projects;