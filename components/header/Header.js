"use client";

import { useState } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMunu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="nav-main">
          <div className="logo">
            tipApp
            {/* <img src="/images/logo.svg" alt="logo" /> */}
          </div>

          <div className="nav-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Privacy policy</a>
              </li>

              <li>
                <a href="#">Terms & Conditions</a>
              </li>

              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <button className="nav-toggle-btn" onClick={toggleMunu}>
            <i className="bi bi-list"></i>
          </button>
          <div className="nav-actions">
            <button className="nav-act-btn nav-act-btn-login">Login</button>
            <button className="nav-act-btn">Get Started</button>
          </div>
        </div>

        <div className={`nav-small ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">pricing</a>
            </li>
            <li>
              <a href="#">Demo</a>
            </li>
          </ul>

          <div className="small-nav-actions">
            {/* <button className="login">Login</button> */}
            {/* <button className="nav-act-btn">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
