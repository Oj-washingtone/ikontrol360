import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8 banner-content">
            <h1 className="banner-title">
              Experience the comfort
              <br /> of connected living
            </h1>
            <p className="banner-desc">
              Discover a seamless, connected lifestyle where convenience,
              control, and peace of mind come together effortlessly.
            </p>

            <div className="banner-cta">
              <button className="banner-cta-btn">Get started</button>
              <button className="banner-cta-btn">Request demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
