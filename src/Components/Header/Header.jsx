import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter, FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import styles from "./Header.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <img
            src="https://avatars.githubusercontent.com/u/22374232?s=280&v=4"
            alt="KGEC Logo"
            className={styles.logo}
          />
          <span className={styles.bcciText}> KGEC</span>

          {/* <img
            src="https://www.wplt20.com/static-assets/images/cssimages/ipl-white.png?v=50.68"
            alt="IPL Logo"
            className={styles.iplBg}
          />
          <span className={styles.iplText}>IPL</span> */}
        </div>

        {/* Right Side */}
        <div className={styles.rightSide}>
          <a href="#" className={styles.downloadLink}>
            Website
          </a>
          {/* <IoLogoGooglePlaystore className={styles.icon} /> */}
          {/* <FaApple className={styles.icon} /> */}
          <span className={styles.separator}>|</span>
          <a href=""> 
          <FaFacebook className={styles.icon} />
          </a>
          <a href="">

          <FaInstagram className={styles.icon} />
          </a>
          <MdOutlineWhatsapp className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
