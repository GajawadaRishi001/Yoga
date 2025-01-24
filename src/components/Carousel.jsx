import React, { useState } from "react";
import "./Carousel.css"; // Import the CSS file

const eventImages = [
  "/images/yogahall.jpg",
  "/images/yogaclass.jpg",
  "/images/therapyhall.webp",
];

const Carousel = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + eventImages.length) % eventImages.length);
  };

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentEventIndex(slideIndex);
  };

  return (
    <div className="carousel-section">
      {/* Left Side: Carousel */}
      <div className="carousel-container">
        <div className="carousel-button left" onClick={handlePrevious}>
          ❰
        </div>
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(${eventImages[currentEventIndex]})`,
          }}
        ></div>
        <div className="carousel-button right" onClick={handleNext}>
          ❱
        </div>
        <div className="carousel-dots">
          {eventImages.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentEventIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            >
              ●
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Quote Section */}
      <div className="quote-section">
        <p className="quote">
          "Yoga is the journey of the self, through the self, to the self."  
        </p>
        <p className="quote-author">- Bhagavad Gita</p>
      </div>
    </div>
  );
};

export default Carousel;
