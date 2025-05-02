import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="contact-section">
            <h2>Contact Details</h2>
            <p className="contact-item">
              <Link to="/" className="icon-link">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                  alt="Home Icon"
                  className="icon"
                />
              </Link>
              <span>
                <strong>Vishal Bharti Sr. Sec. School</strong>
                <br />
                opposite D Block, Saraswati Vihar, Parwana Road, Pitampura,
                Delhi-110034
              </span>
            </p>
            <p className="contact-item">
              <Link to="tel:+911127026750" className="icon-link">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                  alt="Phone Icon"
                  className="icon"
                />
              </Link>
              <span>011-27026750, 27023377, 9354937851/54</span>
            </p>
            <p className="contact-item">
              <Link to="mailto:vbsschool.info@gmail.com" className="icon-link">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                  alt="Gmail Icon"
                  className="icon"
                />
              </Link>
              <span>vbs.ideas@gmail.com</span>
            </p>
            <p className="contact-item">
              <Link
                to="https://www.linkedin.com/school/vishal-bharti-school/about/"
                target="_blank"
                className="icon-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn Icon"
                  className="icon"
                />
              </Link>
              <span>Visit Us on LinkedIn</span>
            </p>
          </div>

          <div className="map-section">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1740.0!2d77.1258319128906!3d28.694575671513434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d024f73d1a3e5%3A0xabc!2sVishal%20Bharti%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1690123456789"
              width="100%"
              height="250"
              style={{ border: "0", borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="footer-right">
          <div className="quick-links-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a
                  href="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/ADMISSION%20FORM_VBS.pdf"
                  className="quick-link"
                  target="_blank" // Opens the PDF in a new tab
                  rel="noopener noreferrer" // For security reasons when opening a new tab
                >
                  Registration Form
                </a>
              </li>
              <li>
                <a
                  href="//img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/Monthly-planner(2023-24)%20(1).pdf"
                  className="quick-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Planner
                </a>
              </li>
              <li>
                <Link to="/contact" className="quick-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer; 