import React, { useEffect } from "react";
import NavBarCmp from "../../components/NavBar/NavBarCmp";
import Navigator from "../../components/Navigator/Navigator";
import "./blogsPage.css";

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBarCmp />
      <Navigator />
      <div>Display Blog posts</div>
    </div>
  );
};

export default BlogsPage;
