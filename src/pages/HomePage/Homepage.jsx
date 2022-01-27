import React, { useEffect, useState } from "react";
import axios from "axios";
import AboutBoxes from "../../components/AboutBoxes/AboutBoxes";
import AboutUs from "../../components/AboutUs/AboutUs";
import Blogs from "../../components/Blogs/Blogs";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import StatsCmp from "../../components/StatsCmp/StatsCmp";
import "./homePage.css";

const Homepage = () => {
  const [factBalance, setFactBalance] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://horizon.stellar.org/accounts/GATNPMPW57YMMN6RK4DMQS3RUNEBO3J62EOCNW763THSSN526A2HVSBK"
      )
      .then((data) => {
        const factToken = data.data.balances.filter(
          (token) => token.asset_code === "FACT"
        )[0];
        // console.log(parseInt(factToken.balance));
        setFactBalance(parseInt(factToken.balance));
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <Header />
      <StatsCmp factBalance={factBalance} />
      <Slider />
      <AboutBoxes />
      <Blogs />
      <AboutUs />
    </div>
  );
};

export default Homepage;
