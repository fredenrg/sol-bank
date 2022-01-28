import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardBlogList from "../../components/CardBlogList/CardBlogList";
import NavBarCmp from "../../components/NavBar/NavBarCmp";
import Navigator from "../../components/Navigator/Navigator";
import "./blogsPage.css";

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog-page">
      <NavBarCmp redirect={true} />
      <Navigator title1="Our Blog" title2="Posts" />
      <div className="blog-page-list">
        <Container>
          <Row>
            <Col sm={4}>
              <CardBlogList />
            </Col>
            <Col sm={4}>
              <CardBlogList />
            </Col>
            <Col sm={4}>
              <CardBlogList />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <CardBlogList />
            </Col>
            <Col sm={4}>
              <CardBlogList />
            </Col>
            <Col sm={4}>
              <CardBlogList />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogsPage;
