import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-image">
        <img
          src="//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/blob-bc2987e.png/:/cr=t:19.54%25,l:0%25,w:100%25,h:60.92%25/rs=w:600,h:800,cg:true"
          alt="Representative"
        />
        <p className="info-name">Ms. Kiran Dhall</p>
      </div>
      <div className="info-text">
        <h2 className="principal-quote-heading">Principal's Words</h2>
        <h1>
          “Education is our passport to the future, for tomorrow belongs to the
          people who prepare for it today.”
        </h1>
        <p>
          The school, with an enthusiastic, experienced, and qualified teaching
          staff along with excellent infrastructure facilities, provides a
          holistic atmosphere for the child to develop into the capable young
          wizards of today. Co-curricular activities complement the curriculum
          and aim at developing the personality of every student at the
          physical, mental, and cultural levels. Besides scholastic
          achievements, the school also caters to polishing non-scholastic
          attributes by providing a conducive environment, including the
          inclusion of different clubs such as Music, Dance, Art & Craft, and
          Dramatics.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
