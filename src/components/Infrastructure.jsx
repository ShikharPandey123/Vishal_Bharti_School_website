import React from "react";
import "./Infrastructure.css"; // For styling
import { details } from "./InfrastructureDetail"; // Import details object

const Infrastructure = () => {
  // Convert the details object into an array of cards
  const cards = Object.entries(details).map(([key, value], index) => ({
    id: index + 1,
    title: value.title,
    image: value.image,
    link: `/infrastructure/${key}`, // Use the key as the link
  }));

  return (
    <div className="infrastructure-page">
      <div className="infrastructure-container">
        <div className="card-grid">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div to={card.link}>
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-title">{card.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
