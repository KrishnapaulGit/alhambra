import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import { db } from '../../firebase.js'; // Import Firebase
import { doc, onSnapshot } from 'firebase/firestore';

const HeroSection = () => {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    // Reference to the Firestore document
    const matchRef = doc(db, 'matches', 'match7'); // Replace 'match7' with your document ID

    // Listen for real-time updates
    const unsubscribe = onSnapshot(matchRef, (doc) => {
      if (doc.exists()) {
        setMatchData(doc.data());
      } else {
        console.log('No such document!');
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (!matchData) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <div className={styles.container}>
      <div className={styles.backgroundPattern} />
      
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            MATCH {matchData.matchNumber}, {matchData.team1} VS {matchData.team2} | {matchData.date} | {matchData.time}
          </h1>
          <div className={styles.matchStatus}>
            <span className={styles.badge}>
              {matchData.status}
            </span>
          </div>
        </div>

        {/* Teams Container */}
        <div className={styles.teamsContainer}>
          {/* Team 1 Logo and Score */}
          <div className={styles.teamLogo}>
            <div className={`${styles.logoAndScore} ${styles.leftTeam}`}>
              <img
                src={matchData.team1Logo}
                alt={`${matchData.team1} Logo`}
                className={styles.logoImage}
              />
              <div className={styles.scoreContainer}>
                <span className={styles.score}>{matchData.team1Score}</span>
                <span className={styles.overs}>({matchData.team1Overs})</span>
              </div>
            </div>
            <div className={styles.logodiv}>{matchData.team1Text}</div>
          </div>

          {/* VS Badge */}
          <div className={styles.vsBadge}>
            vs
          </div>

          {/* Team 2 Logo and Score */}
          <div className={styles.teamLogo}>
            <div className={`${styles.logoAndScore} ${styles.rightTeam}`}>
              <img
                src={matchData.team2Logo}
                alt={`${matchData.team2} Logo`}
                className={styles.logoImage}
              />
              <div className={styles.scoreContainer}>
                <span className={styles.score}>{matchData.team2Score}</span>
                <span className={styles.overs}>({matchData.team2Overs})</span>
              </div>
            </div>
            <div className={styles.leftlogotext}>{matchData.team2Text}</div>
          </div>
        </div>

        {/* Match Info */}
        <div className={styles.matchInfo}>
          <p className={styles.timeInfo}>
            Match begins at {matchData.time} IST ({matchData.gmtTime} GMT)
          </p>
          <div className={styles.locationContainer}>
            <svg 
              className={styles.locationIcon}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            {matchData.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;