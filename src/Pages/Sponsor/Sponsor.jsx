import React from 'react';
import styles from './Sponsor.module.css';

const Sponsors = () => {
  return (
    <div className={styles.sponsorsContainer}>
      {/* Title Sponsor Section */}
      <div className={styles.titleSponsor}>
        <h2>ORGANIZER</h2>
        <div className={styles.sponsorLogo}>
          <img src="https://github.com/KrishnapaulGit/Triweb/blob/main/sportix-removebg-preview.png?raw=true" alt="Title Sponsor Logo" />
        </div>
        <h4>Sports & Athletics Club of KGEC </h4>
      </div>
      
      <div className={styles.titleSponsor}>
        <h2>ASSOCIATION</h2>
        <div className={styles.sponsorLogo}>
          <img src="https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/348232367_1121984698757424_498802511248340253_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=X8xjzOn5bx0Q7kNvgHTf4Y3&_nc_oc=AdiZMTvhZxzljnn6Qx3KAexMfeoIJOHOqPYNu-oHqKD1F8NE1T3b760P9uDXpHv7Nnxs75xrRXLd6L5mbKsOeYAo&_nc_zt=23&_nc_ht=scontent.fccu27-2.fna&_nc_gid=A_WDsFolNwU27opfKQGbMu-&oh=00_AYBGDcliU4JWDwAJK4X4cm8-QdMTQCpnwqs-MbjqLRNKog&oe=67C30E69" alt="Title Sponsor Logo" />
        </div>
        <h4>KGEC Students' Union</h4>

      </div>
      <div className={styles.titleSponsor}>
        <h2>SPONSOR</h2>
        <div className={styles.sponsorLogo}>
          <img src="https://easy2learning.in/assets/imgs/logo-1.jpg" alt="Title Sponsor Logo" />
        </div>
        <h4>Easy2Learning - </h4>
      </div>
      <div className={styles.titleSponsor}>
        <h2>TECH PARTNER</h2>
        <div className={styles.sponsorLogo}>
          <img src="https://kgec-coding.github.io/KeyGEnCoders/img/keygenlogo.png" alt="Title Sponsor Logo" />
        </div>
        <h4>Coding Club of KGEC</h4>

      </div>

      {/* Associate Partners Section */}
      {/* <div className={styles.associatePartners}>
        <h2>Associate Partners</h2>
        <div className={styles.partnerLogos}>
          <div className={styles.partnerLogo}>
            <img src="simter-logo.png" alt="Simter Logo" />
          </div>
          <div className={styles.partnerLogo}>
            <img src="herbalife-logo.png" alt="Herbalife Logo" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Sponsors;