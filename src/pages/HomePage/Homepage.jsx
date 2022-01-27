import React, { useEffect } from "react";
import AboutBoxes from "../../components/AboutBoxes/AboutBoxes";
import AboutUs from "../../components/AboutUs/AboutUs";
import Blogs from "../../components/Blogs/Blogs";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import StatsCmp from "../../components/StatsCmp/StatsCmp";
import "./homePage.css";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <Header />
      <StatsCmp />
      <Slider />
      <AboutBoxes />
      <Blogs />
      <AboutUs />
    </div>
  );
};

export default Homepage;
