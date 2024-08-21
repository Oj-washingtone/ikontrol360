import React from "react";
import "./mobile.css";

export default function Mobile() {
  return (
    <div className="section mobile-features">
      <div className="container">
        <div className="row">
          <div className="section-header-wrapper">
            <h1 className="sub-title">How it works</h1>
            <h1 className="title">Experience Convenience at your fingertip</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="composite-mobile-features">
              <img src="/images/app/composite-phone.png" alt="Mobile stack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
