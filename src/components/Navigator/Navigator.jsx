import React from "react";
import "./navigator.css";

const Navigator = ({ title1, title2 }) => {
  return (
    <div className="navigator">
      <h2>
        <span className="header-first">{title1}</span>{" "}
        <span className="header-last">{title2}</span>
      </h2>
    </div>
  );
};

export default Navigator;
