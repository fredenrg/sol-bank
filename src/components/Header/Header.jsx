import React from "react";
import {} from "react-bootstrap";
import "./header.css";
import headerVideo from "../../videos/header-bg.mp4";
import NavBarCmp from "../NavBar/NavBarCmp";

const Header = () => {
  return (
    <div className="main-header">
      <NavBarCmp />
      <div className="video-wrapper">
        <div className="video-overlay">
          <div className="content">
            <h1>A DIGITAL MARKETING AGENCY</h1>
            <h2>With Proven Results</h2>
            <p>
              From boosting online traffic and brand awareness, to generating
              qualified leads and increasing sales, our online marketing company
              will help your business grow with successful marketing,
              advertising, design, and website services.
            </p>
            <div className="header-btn">
              <span>Grow Your Business With Us</span>
            </div>
          </div>
        </div>
        <video autoPlay loop muted className="bg-video">
          <source src={headerVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Header;
