import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-wrapper">
          <div className="contact-div">
            <h5>WHERE TO MEET ?</h5>
            <div>
              <i className="fas fa-phone-alt"></i>
              <span>
                3/53 Lal Bahadhur Colony, Shringar Nagar Road Coimbatore, India
              </span>
            </div>
            <hr />
            <h5>CALL US</h5>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <span>(00) 123 456 7890</span>
            </div>
            <hr />
            <h5>MAIL US</h5>
            <div>
              <i className="fas fa-envelope"></i>
              <span>contact@ownmail.com</span>
            </div>
          </div>
          <div className="links">
            <div className="social-links">
              <h5>Social Links</h5>
              <a href="/">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <hr />
              <a href="/">
                <i className="fab fa-instagram-square"></i>
                <span>Instagram</span>
              </a>
              <hr />
              <a href="/">
                <i className="fab fa-telegram-plane"></i>
                <span>Telegram</span>
              </a>
              <hr />
              <a href="/">
                <i className="fab fa-facebook-f"></i>
                <span>Telegram</span>
              </a>
              <hr />
            </div>
            <div className="quick-links">
              <h5>Quick Links</h5>
              <p>Sol-Bank</p>
              <p>SOl Tokens</p>
              <p>Stats</p>
              <Link to="/blogs">
                <p>Blog</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="copyright">
        <p>
          © 2022. All Rights reserved by{" "}
          <span style={{ fontWeight: "bold" }}>Sol-banks</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
