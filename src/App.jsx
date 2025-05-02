import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection";
import ContactFormModal from "./components/ContactFormModal";
import SchoolInfo from "./components/SchoolInfo";
import Rules from "./components/Rules";
import Assessment from "./components/Assessment";
import Infrastructure from "./components/Infrastructure";
import ParallaxSection from "./components/ParallaxSection";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SchoolInfo />
                <ParallaxSection /> {/* Add the Parallax Component here */}
                <InfoSection />
                <Footer />
              </>
            }
          />
          <Route path="/rules" element={<Rules />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
        </Routes>
      </main>

      <div className="message-icon" onClick={toggleModal}>
        <i className="fas fa-comment-alt"></i>
      </div>

      {isModalOpen && <ContactFormModal onClose={toggleModal} />}
    </div>
  );
};

export default App;
