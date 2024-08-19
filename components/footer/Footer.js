import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1 className="footer-title">iKontrol360</h1>

              <div className="small-intro">
                <div className="footer-logo">
                  {/* <img src="/images/logo.png" alt="logo" /> */}
                </div>
                <p className="footer-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h1 className="footer-title">Important links</h1>
              <ul>
                <li>
                  <a href="#">Demo</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h1 className="footer-title">Legal</h1>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h1 className="footer-title">Location</h1>
              <ul>
                <li>
                  <i className="bi bi-geo-alt-fill"></i> Solanite Godowns,
                  Mombasa Road, Nairobi, Kenya. Kenya
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i> +254 111 014 700
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i> info@numeraliot.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-stripe">
        <div className="container">
          <div className="footer-stripe-items">
            <p className="footer-copy">&copy; 2021. All rights reserved.</p>
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
