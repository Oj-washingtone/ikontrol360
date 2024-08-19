import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="sub-title">Features</h1>
            <h1 className="title">Very nice statement goes here</h1>
            <p className="desc">
              Unlock a world of possibilities with cutting-edge features that
              enhance every aspect of your connected life. From real-time
              monitoring to smart home integration, our platform empowers you to
              take full control of your environment. Here's how it all comes
              together.
            </p>

            {/* <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="about-card">
                  <h1 className="about-card-title">Very nice title</h1>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tristique, purus nec pulvinar aliquam, lectus quam
                    ultricies lectus, ac vulputate nisl elit eu nunc.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-md-6 about-image-wrapper">
            {/* <div className="composite-image-wrapper">
              <div className="image-wrapper-inner">
                <div className="about-composite-image about-composite-image-1">
                  <img src="/images/about1.jpg" alt="about" />
                </div>
                <div className="about-composite-image about-composite-image-2">
                  <img src="/images/about1.jpg" alt="about" />
                </div>
              </div>

              <div className="image-wrapper-inner-2">
                <div className="about-composite-image about-composite-image-3">
                  <img src="/images/about1.jpg" alt="about" />
                </div>
                <div className="about-composite-image about-composite-image-4"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
