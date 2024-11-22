import React, { useEffect, useState } from "react";
import "./SchoolInfo.css"; // Import the CSS file
import Carousel from "./Caraousel.jsx"; // Import the carousel component

const SchoolInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textStep, setTextStep] = useState(0);

  useEffect(() => {
    // Start the animation sequence
    const timer = setTimeout(() => {
      setTextStep(1); // Show title text
    }, 500);

    const nextTimer = setTimeout(() => {
      setTextStep(2); // Fade out the text
      setIsVisible(false); // Remove blur after text fades
    }, 4000); // Text stays for 3.5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(nextTimer);
    };
  }, []);

  return (
    <div className="school-info-container">
      {/* Carousel Section */}
      <Carousel />

      {/* Text Overlay Section */}
      <div
        className={`text-overlay ${
          isVisible || textStep === 1 ? "blur-bg" : ""
        }`}
      >
        {textStep === 1 && (
          <h2 className={`fade-text ${textStep === 1 ? "fade-in" : ""}`}>
            Vishal Bharti Senior Secondary School
          </h2>
        )}
      </div>
    </div>
  );
};

export default SchoolInfo;
