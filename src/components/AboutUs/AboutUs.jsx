import React from "react";
import { Container, Image } from "react-bootstrap";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about">
      <Container>
        <div className="mainHeader">
          <h2>OUR BEST PEOPLE</h2>
          <span className="tag">
            WE HAVE THE BEST IN CLASS PEOPLE ALL AROUND
          </span>
          <span className="dots">...</span>
        </div>
        <div className="about-row">
          <div className="box">
            <div className="about-overlay">
              <div className="info">
                <h5>Ben Foster</h5>
                <hr />
                <p>C.E.O</p>
              </div>
            </div>
            <Image fluid src="/images/sol-logo-new.png" />
          </div>
          <div className="box">
            <div className="about-overlay">
              <div className="info">
                <h5>Ben Foster</h5>
                <hr />
                <p>C.E.O</p>
              </div>
            </div>
            <Image fluid src="/images/sol-logo-new.png" />
          </div>
        </div>
        <div className="about-row">
          <div className="box">
            <div className="about-overlay">
              <div className="info">
                <h5>Ben Foster</h5>
                <hr />
                <p>C.E.O</p>
              </div>
            </div>
            <Image fluid src="/images/sol-logo-new.png" />
          </div>
          <div className="box">
            <div className="about-overlay">
              <div className="info">
                <h5>Ben Foster</h5>
                <hr />
                <p>C.E.O</p>
              </div>
            </div>
            <Image fluid src="/images/sol-logo-new.png" />
          </div>
          <div className="box">
            <div className="about-overlay">
              <div className="info">
                <h5>Ben Foster</h5>
                <hr />
                <p>C.E.O</p>
              </div>
            </div>
            <Image fluid src="/images/sol-logo-new.png" />
          </div>
        </div>
        <div className="about-row">
          <div className="box">
            <div className="about-overlay">
              <div className="info">
                <h5>Ben Foster</h5>
                <hr />
                <p>C.E.O</p>
              </div>
            </div>
            <Image fluid src="/images/sol-logo-new.png" />
          </div>
          <div className="box">
            <div className="about-overlay">
              <div className="info">
                <h5>Ben Foster</h5>
                <hr />
                <p>C.E.O</p>
              </div>
            </div>
            <Image fluid src="/images/sol-logo-new.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
