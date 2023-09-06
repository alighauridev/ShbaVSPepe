import React from "react";
import "../scss/chart.scss";
import chartIcon from "../assests/dextools-250x80.png";
const Chart = () => {
  return (
    <>
      <section id="chart">
        <div className="container">
          <div className="heading">
            <h1>CHART</h1>
          </div>
          <div className="des">
            Pepe VS Shiba presents a simple tokenomics structure with a 1:1 buy and sell ratio, guaranteeing equity and parity for all token holders.
          </div>
          <div className="bottom_icon">
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xc989ae1a45dbfdc98dc85e0b385927948d5a6e3a" target="_blank">
              <img src={chartIcon} alt="buy" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chart;
