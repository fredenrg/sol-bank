import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardBlog from "../CardBlog/CardBlog";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <Container>
        <h2>IN OUR UPDATES</h2>
        <span>WE ENJOY FOLLOWING THESE TRENDS</span>
        <span>...</span>
        <div className="blogs-row">
          <Row>
            <Col sm={6}>
              <CardBlog />
            </Col>
            <Col sm={6}>
              <CardBlog />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
