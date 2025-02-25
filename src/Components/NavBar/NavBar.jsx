import React from "react";
import styles from "./NavBar.module.css";
import {
  FaSearch,
  FaHome,
  FaFutbol,
  FaVolleyballBall,
  FaTableTennis,
  FaChessBoard,
} from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md"; // Import GiCricketBat for Cricket

const NavBar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <img
              src="https://github.com/KrishnapaulGit/Triweb/blob/main/sportix-removebg-preview.png?raw=true"
              alt="Sportix Logo"
            />
            <span className={styles.bcciText}> Al-Hambra</span>
          </div>

          {/* Desktop Menu - Hidden on Mobile */}
          <div className={`${styles.navMenu} ${styles.desktopOnly}`}>
            <ul>
              <li><a href="#">Cricket</a></li>
              <li><a href="#">Football</a></li>
              <li><a href="#">Volleyball</a></li>
              <li><a href="#">Table Tennis</a></li>
              <li><a href="#">Badminton</a></li>
              <li><a href="#">Carrom</a></li>
            </ul>
          </div>

          {/* Search Icon - Always visible on Mobile */}
          <div className={styles.searchIconMobile}>
            <FaSearch />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className={styles.bottomNav}>
        <a href="#" className={styles.active}>
        <MdSportsCricket /> {/* Use GiCricketBat for Cricket */}
          <br />
          Cricket
        </a>
        <a href="#">
          <FaFutbol />
          <br />
          Football
        </a>
        <a href="#">
          <FaVolleyballBall />
          <br />
          Volleyball
        </a>
        <a href="#">
          <FaTableTennis />
          <br />
          Table Tennis
        </a>
        <a href="#">
          <FaTableTennis /> {/* Use FaTableTennis for Badminton as a placeholder */}
          <br />
          Badminton
        </a>
        <a href="#">
          <FaChessBoard />
          <br />
          Carrom
        </a>
      </div>
    </>
  );
};

export default NavBar;