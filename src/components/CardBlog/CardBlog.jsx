import React from "react";
import { Image } from "react-bootstrap";
import "./cardBlog.css";

const CardBlog = () => {
  return (
    <div className="card-blog">
      <div className="top">
        <Image fluid src="/images/slider-1.png" />
        <div className="title-wrapper"></div>
      </div>
      <div className="bottom">
        <div className="blog-info"></div>
        <div className="blog-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          repellat quam sunt vitae odio consequuntur vel officiis dolorum
          molestiae pariatur quis...
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
