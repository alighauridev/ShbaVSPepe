import React from "react";
import "../scss/buy.scss";
import buyIcon from "../assests/uniswap-300x75.png";
const Buy = () => {
  return (
    <>
      <section id="buy">
        <div className="container">
          <div className="heading">
            <h1>BUY</h1>
          </div>
          <div className="des">
            Participate in the meme showdown by obtaining your Pepe VS Shiba tokens through Uniswap, the foremost decentralized exchange platform.
          </div>
          <div className="bottom_icon">
            <a href="#">
              <img src={buyIcon} alt="buy" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buy;
