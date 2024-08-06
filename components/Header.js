import React from "react";
import "@/styles/header.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="container header-content">
        <Link href="/">
          <div className="logo">
            <img src="/images/logos/logo-white.svg" alt="Logo" />
          </div>
        </Link>

        <div className="header-right">
          <a href="/support" className="contact-us-link">
            Contact Us
          </a>
          <a
            href="https://smartlife.ikontrol360.com/login"
            className="__i_btn __i_btn_ptimary"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
