import React from "react";
import "./features.css";

export default function ProductFeatures() {
  return (
    <div className="section features-wrapper">
      <div className="container">
        <div className="section-header-wrapper">
          <h1 className="sub-title">Features</h1>
          <h1 className="title features-header">
            Bringing Convenience and Control <br />
            to Your Fingertips
          </h1>
        </div>

        <div className="row">
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">Real-Time Monitoring</h1>
              <p className="feature-desc">
                Track and monitor your assets, vehicles, and home appliances in
                real time from anywhere.
              </p>
            </div>
          </div>
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">Smart Home Integration</h1>
              <p className="feature-desc">
                Enhance your living experience by connecting and controlling
                smart home devices such as lights, meters, and security systems.
              </p>
            </div>
          </div>
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">
                Vehicle Performance Optimization
              </h1>
              <p className="feature-desc">
                Keep your vehicle running at its best with performance tracking,
                maintenance alerts, and diagnostic data.
              </p>
            </div>
          </div>
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">Asset Tracking</h1>
              <p className="feature-desc">
                Secure and monitor valuable assets with GPS tracking and
                real-time alerts.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">Utility Management</h1>
              <p className="feature-desc">
                Monitor and manage your water and gas usage to optimize
                efficiency and reduce costs.
              </p>
            </div>
          </div>
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">Custom Alerts and Notifications</h1>
              <p className="feature-desc">
                Set personalized alerts for various events, including energy
                usage thresholds, vehicle maintenance needs, and security
                breaches.
              </p>
            </div>
          </div>
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">Automation and Scheduling</h1>
              <p className="feature-desc">
                Automate daily tasks and create schedules to streamline your
                routines and enhance convenience.
              </p>
            </div>
          </div>
          <div className=" col-md-3">
            <div className="feature-card">
              <h1 className="feature-title">Secure Data Management</h1>
              <p className="feature-desc">
                Trust in our advanced security protocols to keep your data safe
                and private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
