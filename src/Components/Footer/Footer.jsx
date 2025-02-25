import React from 'react';
import styles from './Footer.module.css';

const footerData = [
  {
    title: 'Teams',
    links: [
      { label: 'Delhi Capitals', href: '/teams/delhi-capitals' },
      { label: 'Gujarat Giants', href: '/teams/gujarat-giants' },
      { label: 'Mumbai Indians', href: '/teams/mumbai-indians' },
      { label: 'Royal Challengers Bangalore', href: '/teams/rcb' },
      { label: 'UP Warriorz', href: '/teams/up-warriorz' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Anti Corruption Policy', href: '/about/anti-corruption' },
      { label: 'Anti Doping Policy', href: '/about/anti-doping' },
      { label: 'TUE Application Form', href: '/about/tue-form' },
      { label: 'Anti Discrimination Policy', href: '/about/anti-discrimination' },
      { label: 'Clothing And Equipment Regulations', href: '/about/equipment' },
      {
        label: 'Code Of Conduct For Players And Teams Officials',
        href: '/about/code-conduct',
      },
    ],
  },
  {
    title: 'Guidelines',
    links: [
      {
        label: 'Code Of Conduct For Match Officials',
        href: '/guidelines/match-officials',
      },
      { label: 'Match Playing Conditions', href: '/guidelines/playing-conditions' },
      { label: 'PMOA Minimum Standard', href: '/guidelines/pmoa' },
      {
        label: 'Suspected Illegal Action Policy',
        href: '/guidelines/illegal-action',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Terms & Conditions', href: '/contact/terms' },
      { label: 'Privacy Policy', href: '/contact/privacy' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        <div className='text'>Created by - Krishna Karthik with ❤️ </div>
        <div className={styles.copyright}>
          © COPYRIGHT {currentYear} Al-Hambra KGEC. ALL RIGHTS RESERVED.
        </div>

      {/* Cricket Player Icon SVG */}
      {/* <svg 
        className={styles.cricketIcon} 
        viewBox="0 0 1000 1000" 
        fill="currentColor"
      >
        <path d="M833.4,457.5c0,0-148.5,152.1-141.1,144.7c-74.4,74.4-169,95.1-169,95.1L261,435l0,0c0,0,20.7-94.6,95.1-169
          c-7.4,7.4,144.7-141.1,144.7-141.1c74.4-74.4,195.2-74.4,269.6,0l62.9,62.9C907.8,262.3,907.8,383.1,833.4,457.5z"/>
        <path d="M260.7,435.3l262.3,262.3c0,0-33.2,18.6-80.4,18.6c-47.2,0-80.4-18.6-80.4-18.6L205.7,541.1
          c0,0-18.6-33.2-18.6-80.4c0-47.2,18.6-80.4,18.6-80.4L260.7,435.3z"/>
        <circle cx="325.1" cy="380.9" r="31.9"/>
      </svg> */}
    </footer>
  );
};

export default Footer;