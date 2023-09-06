import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaPage4,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded, Telegram, Twitter } from "@material-ui/icons";
import bac from "../assests/footer-bac.jpg";
import logo1 from "../assests/logo-1.webp";
import logo2 from "../assests/logo-2.webp";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="heading">
            <h1>Socials</h1>
          </div>
          <div className="icons">
            <a href="https://t.me/pepevshiba" target="_blank">
              <Telegram />
            </a>
            <a href="https://twitter.com/pepevshiba_eth" target="_blank">
              <Twitter />{" "}
            </a>
            <div className="tooltip" title="Coming Soon">
              <a href="#" target="_blank">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
