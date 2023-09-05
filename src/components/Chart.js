import React from "react";
import "../scss/chart.scss";
import chartIcon from "../assests/dextools-250x80.png";
const Chart = () => {
  return (
    <>
      <section id="chart">
        <div className="container">
          <div className="heading">
            <h1>TOKENOMICS</h1>
          </div>
          <div className="des">
            Shiba vs Pepe offers a straightforward tokenomics structure where
            the Chart and sell ratio is 1:1, ensuring fairness and equality for
            all holders.
          </div>
          <div className="bottom_icon">
            <a href="#">
              <img src={chartIcon} alt="buy" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chart;
