import Header from "@/components/Header";
import React from "react";

export default function SupportPage() {
  return (
    <div className="support-wrapper content">
      <Header />
      <div className="container">
        <div className="row support-form-wrapper ">
          <div className="col-md-6 support-form">
            <h4>Contact us</h4>
            <form className="support-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="e.g. example@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <button type="submit" className="ikontrol-btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
