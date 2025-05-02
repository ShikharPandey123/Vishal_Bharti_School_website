import React from "react";
import "./ContactFormModal.css";

const ContactFormModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Vishal Bharti Senior Secondary School</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className="modal-form">
          <p>Hi! Let us know how we can help, and we'll respond shortly.</p>

          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">How can we help?*</label>
            <textarea
              id="message"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
