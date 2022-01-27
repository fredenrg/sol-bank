import React from "react";
import "./statsCmp.css";

const StatsCmp = ({ factBalance }) => {
  return (
    <div className="stats-cmp" id="stats">
      <div className="slanted-box">
        <h5>sol-banks in use</h5>
        <hr className="divider" />
        <h3>{factBalance.toFixed(2)}</h3>
      </div>
      <div className="slanted-box">
        <h5>wh generated per day</h5>
        <hr className="divider" />
        <h3>{(factBalance * 135).toFixed(2)}</h3>
      </div>
      <div className="slanted-box">
        <h5>rewards paid per day</h5>
        <hr className="divider" />
        <h3>{(factBalance * 135 * 10).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default StatsCmp;
