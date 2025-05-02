import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search Query: ", searchQuery);
  };

  return (
    <header className="header">
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="dropdown-link">Admission</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/admission%20procedure%20vbs%202025-26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admission Procedure
                  </a>
                </li>
                <li>
                  <a
                    href="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/ADMISSION%20FORM_VBS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Registration Form
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1ainBcr2jF9peizUW9wHkxyBXp4d6KU6V/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fee Structure
                  </a>
                </li>
                <li>
                  <a
                    href="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/Admission-Withdrawal%20rules_vbs_2024-25.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admission Withdrawal
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span className="dropdown-link">Academics</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/rules" activeClassName="active">
                    Rules & Regulations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/assessment" activeClassName="active">
                    Assessment
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/infrastructure" activeClassName="active">
              Infrastructure
            </NavLink>
          </li>
        </ul>
      </nav>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
