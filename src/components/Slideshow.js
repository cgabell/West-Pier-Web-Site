import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // or use a separate Slideshow.css if needed

const images = [
  "/assets/Banner_01.jpg",
  "/assets/Banner_02.jpg",
  "/assets/Banner_03.jpg",
  "/assets/Banner_04.jpg"
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img
        src={images[current]}
        alt={`Banner ${current + 1}`}
        className="slideshow-image"
        onError={(e) => (e.target.style.display = "none")}
      />
    </div>
  );
}

export default Slideshow;