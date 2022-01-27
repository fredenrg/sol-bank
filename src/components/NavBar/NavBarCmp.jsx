import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navBarCmp.css";

const NavBarCmp = () => {
  return (
    <div className="navBar">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        // bg="dark"
        // variant="dark"
        className="navBar-main"
      >
        <div className="container-fluid" id="nav-wrapper">
          <Link to="/">
            <Navbar.Brand className="navBrand-mobile" href="#home">
              <Image
                className="brand-logo"
                src="/images/sol-logo-new.jpeg"
                alt="sol-bank-logo"
              />
              <span className="brand-name">SOL-BANK</span>
            </Navbar.Brand>
          </Link>
          <div className="navLinksWrapper-mobile">
            <div className="toggler">
              <Navbar.Toggle
                id="navbarToggler-mobile"
                aria-controls="responsive-navbar-nav"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#fff",
                  alignItems: "center",
                  fontSize: "14.1px",
                  padding: "10px 8%",
                }}
              >
                <span>Menu</span>
                <i className="fas fa-bars"></i>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/">
                  <Nav.Link className="navbar-links" href="#home">
                    <div className="dotted">Home</div>
                  </Nav.Link>
                </Link>
                <Nav.Link className="navbar-links" href="#stats">
                  <div className="dotted">Stats</div>
                </Nav.Link>
                <Nav.Link className="navbar-links" href="#sol-bank">
                  <div className="dotted">Sol-bank</div>
                </Nav.Link>
                <Nav.Link className="navbar-links" href="#sol-tokens">
                  <div className="dotted">SOLS Token</div>
                </Nav.Link>
                <Link to="/blogs">
                  <Nav.Link className="navbar-links" href="#news">
                    <div className="dotted">Blog</div>
                  </Nav.Link>
                </Link>
                <Nav.Link className="navbar-links" href="#about">
                  <div className="dotted">About</div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBarCmp;
