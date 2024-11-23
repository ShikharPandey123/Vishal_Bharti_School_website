import React from "react";
import "./ParallaxSection.css";

const ParallaxSection = () => {
  return (
    <div className="parallax-section">
      <div className="parallax-content">
        <h1 className="vision-title">VISION</h1>
        <p className="vision-description">
          Empowering students to pursue their dreams.
        </p>
        <h2 className="values-title">VALUES</h2>
        <p className="values-description">
          Resilience, Respect, Responsibility, Honesty, Academic Excellence,
          Patriotism, Dignity, Perseverance.
        </p>
        <h2 className="motto-title">MOTTO OF THE SCHOOL</h2>
        <p className="motto-description">
          MISSION: Fueling passion for learning and developing innate qualities
          of students to the best of their efficiency.
        </p>
      </div>
    </div>
  );
};

export default ParallaxSection;
