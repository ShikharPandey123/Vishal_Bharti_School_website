import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection";
import ContactFormModal from "./components/ContactFormModal";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import "./App.css";
import SchoolInfo from "./components/SchoolInfo";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <SchoolInfo />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>

        {/* Info Section */}
        <InfoSection />

        {/* Footer Section */}
        <Footer />

        {/* Floating Message Icon */}
        <div className="message-icon" onClick={toggleModal}>
          <i className="fas fa-comment-alt"></i>
        </div>

        {/* Contact Form Modal */}
        {isModalOpen && <ContactFormModal onClose={toggleModal} />}
      </div>
    </Router>
  );
};

export default App;
