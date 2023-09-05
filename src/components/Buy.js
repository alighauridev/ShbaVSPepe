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
            Join the meme battle by acquiring your Shiba VS Pepe on Uniswap, the
            leading decentralized exchange.
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
