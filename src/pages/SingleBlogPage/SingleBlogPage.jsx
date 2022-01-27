import React, { useEffect } from "react";
import NavBarCmp from "../../components/NavBar/NavBarCmp";
import Navigator from "../../components/Navigator/Navigator";

const SingleBlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBarCmp />
      <Navigator />
      <div>Display Single Blog</div>
    </div>
  );
};

export default SingleBlogPage;
