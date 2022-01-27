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
            <h1>The Sol-Bank</h1>
            <h2>Energy For Everyone</h2>
            <p>
              The Sol-Bank is aimed towards the African/Asian markets where
              access to energy is limited or non-existent and supplied as a
              bundle consisiting of a Sol-bank, LED lamps and a solar panel.
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
