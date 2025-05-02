import React, { useEffect, useState } from "react";
import "./SchoolInfo.css";
import Carousel from "./Caraousel.jsx";

const SchoolInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textStep, setTextStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextStep(1);
    }, 500);

    const nextTimer = setTimeout(() => {
      setTextStep(2);
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(nextTimer);
    };
  }, []);

  return (
    <div className="school-info-container">
      <Carousel />
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
