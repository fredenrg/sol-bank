import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardBlog.css";

const CardBlog = () => {
  return (
    <div className="card-blog">
      <div className="blog-btn">
        <Link to="/blog">
          <div className="text">Read More</div>
        </Link>
        <div>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
      <div className="top">
        <div className="blog-img-wrapper" style={{ overflow: "hidden" }}>
          <Image className="blog-img" fluid src="/images/slider-1.png" />
        </div>
        <Link to="/blog">
          <div className="title-wrapper">
            <h5>quam sunt vitae odio consequuntur vel</h5>
          </div>
        </Link>
      </div>
      <div className="bottom">
        <div className="blog-info">
          <div className="date-div">
            <div>
              <h5>19</h5>
            </div>
            <div>
              <p>Jan</p>
              <p>2022</p>
            </div>
          </div>
          <div>
            <p>Author: Admin</p>
          </div>
        </div>
        <div className="blog-content">
          Pro ut labore probatus accommodare. At iudico persecuti has, sea no
          deleniti ullamcorper. Docendi apeirian et quo, has feugiat lucilius
          definitiones an. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.
          Sed epicuri ocurreret in, per quando expetenda splendide ne...
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
