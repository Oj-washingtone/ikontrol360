import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <h1 className="sub-title">Features</h1> */}
            <h1 className="title tint-section-color">
              Very nice statement goes here
            </h1>
            <p className="desc">
              Unlock a world of possibilities with cutting-edge features that
              enhance every aspect of your connected life. From real-time
              monitoring to smart home integration, our platform empowers you to
              take full control of your environment. Here's how it all comes
              together.
            </p>
          </div>
          <div className="col-md-6 about-image-wrapper">Image goes here</div>
        </div>
      </div>
    </div>
  );
}
