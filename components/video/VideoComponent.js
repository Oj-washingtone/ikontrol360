"use client";

import React from "react";
import "./video.css";

export default function VideoComponent() {
  const handlePlayVideo = () => {
    console.log("Playing video");
  };

  return (
    <div className="video-wrapper section">
      <div className="container">
        <div className="row">
          <div className="section-header-wrapper">
            <h1 className="sub-title">How it works</h1>
            <h1 className="title">Just picture it, we make it happen</h1>
          </div>

          <div className="col-md-9 video-container">
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/7e90gBu4passdddasaddadasdasdasdasdasdasdasda"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="play-button" onClick={handlePlayVideo}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
