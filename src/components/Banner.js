import React, { useEffect } from "react";
import "../scss/banner.scss";
import img1 from "../assests/Logo (3)/Logo.png";

const Banner = () => {
  useEffect(() => { }, []);
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
              Are you prepared to observe the most legendary crypto showdown in history?
            </h1>
            <p>
              Pepe the frog and Shiba Inu, two iconic meme characters, are about to engage in an electrifying Street Fighter-style showdown within the realm of cryptocurrencies!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
