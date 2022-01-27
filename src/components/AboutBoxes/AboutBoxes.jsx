import React from "react";
import { Container } from "react-bootstrap";
import "./aboutBoxes.css";

const AboutBoxes = () => {
  return (
    <div className="about-boxes" id="sol-tokens">
      <Container>
        <div className="boxes-row">
          <div className="box">
            <h5>SOLS TOKENS</h5>
            <hr className="divider" />
            <p>
              Pri id idque assum reprimique, et modo adhuc iudico his, pri solum
              suscipit patrioque eu. Alii ocurreret id his, debitis
              mediocritatem an his.
            </p>
            <div className="icon-box">
              <i className="fas fa-boxes"></i>
            </div>
          </div>
          <div className="box">
            <h5>SOLS TOKENS</h5>
            <hr className="divider" />
            <p>
              Pri id idque assum reprimique, et modo adhuc iudico his, pri solum
              suscipit patrioque eu. Alii ocurreret id his, debitis
              mediocritatem an his.
            </p>
            <div className="icon-box">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
          <div className="box">
            <h5>SOLS TOKENS</h5>
            <hr className="divider" />
            <p>
              Pri id idque assum reprimique, et modo adhuc iudico his, pri solum
              suscipit patrioque eu. Alii ocurreret id his, debitis
              mediocritatem an his.
            </p>
            <div className="icon-box">
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutBoxes;
