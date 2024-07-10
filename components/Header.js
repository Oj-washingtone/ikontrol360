import React from "react";
import "@/styles/header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="container header-content">
        <div className="logo">
          <img src="/images/logos/logo-white.svg" alt="Logo" />
        </div>
        <a
          href="https://smartlife.ikontrol360.com/login"
          className="__i_btn __i_btn_ptimary"
        >
          Sign In
        </a>
      </div>
    </div>
  );
}
