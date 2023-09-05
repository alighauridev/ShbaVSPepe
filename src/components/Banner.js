import React, { useEffect } from "react";
import "../scss/banner.scss";
import img1 from "../assests/shepe-hero-1024x536.png";

const Banner = () => {
  useEffect(() => {}, []);
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="img">
            <img src={img1} alt="banner_img" />
          </div>
          <div className="background">
            <div className="div_1"></div>
            <div className="div_2"></div>
            <div className="div_3"></div>
            <div className="div_2"></div>
            <div className="div_1"></div>
            <div className="div_4"></div>
          </div>
        </div>
        <div className="bottom_des">
          <div className="bottom_container">
            <h1>
              Are you ready to witness the most epic crypto battle of all time?
            </h1>
            <p>
              Shiba Inu and Pepe Frog, two legendary meme characters, are
              stepping into the ring for an electrifying Street Fighter-style
              showdown in the world of cryptocurrencies!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
