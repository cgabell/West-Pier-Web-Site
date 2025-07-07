import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // or use a separate Slideshow.css if needed
import banner01 from "../assets/Banner_01.jpg";
import banner02 from "../assets/Banner_02.jpg";
import banner03 from "../assets/Banner_03.jpg";
import banner04 from "../assets/Banner_04.jpg";
import banner05 from "../assets/Banner_05.jpg";
import banner06 from "../assets/Banner_06.jpg";
import banner07 from "../assets/Banner_07.jpg";
import banner08 from "../assets/Banner_08.jpg";
import banner09 from "../assets/Banner_09.jpg";


const images = [
  banner01,
  banner02,
  banner03,
  banner04,
  banner05,
  banner06,
  banner07,
  banner08,
  banner09
];

function Slideshow() {
  console.log("Slideshow rendered");
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