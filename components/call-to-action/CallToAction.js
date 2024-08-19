import React from "react";
import "./call-to-action.css";

export default function CallToAction() {
  return (
    <div className="call-to-action-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="cta-title">
              Ready To Get Free Consulations For Any <br />
              Of Our Insurance Solutions ?
            </h1>
          </div>
          <div className="col-md-4">
            <button className="my-cta-btn">Get a quote</button>
            <button className="my-cta-btn ctn-btn-secondary">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
