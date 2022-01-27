import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardBlog from "../CardBlog/CardBlog";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <Container>
        <div className="mainHeader">
          <h2>OUR BLOG UPDATES</h2>
          <span className="tag">WE ENJOY FOLLOWING THESE TRENDS</span>
          <span className="dots">...</span>
        </div>
        <div className="blogs-row">
          <Container>
            <Row>
              <Col sm={6}>
                <CardBlog />
              </Col>
              <Col sm={6}>
                <CardBlog />
              </Col>
            </Row>
            <Link to="/blogs">
              <div className="view-all-btn">View all</div>
            </Link>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
