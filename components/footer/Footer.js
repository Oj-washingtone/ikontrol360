import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-stripe">
        <div className="container">
          <div className="footer-stripe-items">
            <p className="footer-copy">&copy; 2024. All rights reserved.</p>
            <div className="footer-socials">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
