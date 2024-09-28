import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8 banner-content">
            <h1 className="banner-title">
              Tip with Ease , Share
              <br /> the Love.
            </h1>
            <p className="banner-desc">
              Discover a seamless, connected lifestyle where convenience,
              control, and peace of mind come together effortlessly.
            </p>

            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search someone to tip"
                autoFocus
              />
              <button className="search-btn">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
