import React from "react";
import "./statistics.css";

export default function Statistics() {
  return (
    <div className="statistics-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="sub-title">Our Impact</h1>
            <h1 className="title">
              Very nice statistics to
              <br />
              help you grow
            </h1>
            {/* <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula, tortor nec commodo ultricies, felis urna posuere nunc,
              ac lacinia nunc turpis a libero. Sed et orci ut sapien vehicula
              ultricies. Nam auctor, erat nec lacinia ultricies, nunc nulla
              aliquet odio, vitae luctus nisl libero et libero.
            </p> */}

            <div className="row stats">
              <div className="col-md-6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="stat-info">
                    <h1 className="stat-value">500 K +</h1>
                    <p className="stat-desc">Customers</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="stat-info">
                    <h1 className="stat-value">1000+</h1>
                    <p className="stat-desc">Claims Processed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="stat-image-wrapper">
              <img src="/images/3.jpg" alt="statistics" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
