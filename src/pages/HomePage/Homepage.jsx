import React from "react";
import AboutBoxes from "../../components/AboutBoxes/AboutBoxes";
import Blogs from "../../components/Blogs/Blogs";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import StatsCmp from "../../components/StatsCmp/StatsCmp";
import "./homePage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <StatsCmp />
      <Slider />
      <AboutBoxes />
      <Blogs />
    </div>
  );
};

export default Homepage;
