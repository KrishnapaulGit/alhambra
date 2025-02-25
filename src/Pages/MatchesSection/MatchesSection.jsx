import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './MatchesSection.module.css';

const MatchesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselTrackRef = useRef(null); // Ref for the carousel track

  const matches = [
    {
      id: '1',
      status: 'COMING',
      league: "Al-Hambra 2025",
      team1: {
        name: 'AOT',
        logo: 'https://w7.pngwing.com/pngs/348/131/png-transparent-academy-of-technology-asansol-engineering-college-maulana-abul-kalam-azad-university-of-technology-hooghly-institute-of-technology-technology-blue-angle-electronics-thumbnail.png',
        score: '0',
        overs: '0'
      },
      team2: {
        name: 'IDEAL',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16Tmt3Q-97bUfZmcC6t-bDrbo3uECbdfz1g&s',
        score: '0',
        overs: '0'
      },
      result: 'Result'
    },
    {
      id: '2',
      status: 'COMING',
      league: "Al-Hambra, 2025",
      team1: {
        name: 'KGEC',
        logo: 'https://avatars.githubusercontent.com/u/22374232?s=280&v=4',
        score: '0',
        overs: '0'
      },
      team2: {
        name: 'JIS',
        logo: 'https://img.favpng.com/2/7/20/jis-college-of-engineering-organization-logo-supreme-knowledge-foundation-group-of-institutions-png-favpng-Jm4tzc7uG4kkLJA1LDLwadH8z.jpg',
        score: '0',
        overs: '0'
      },
      result: 'Result'
    },
    {
      id: '3',
      status: 'COMING',
      league: "Al-Hambra, 2025",
      team1: {
        name: 'IQCITY',
        logo: 'https://i.ytimg.com/vi/9vN_cYHYg5w/maxresdefault.jpg',
        score: '0',
        overs: '0'
      },
      team2: {
        name: 'GCETTS',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlkQ9sk-DtNg4XNbElf-JTuqmcgwXNgEAPg&s',
        score: '0',
        overs: '0'
      },
      result: 'Result'
    },
    {
      id: '4',
      status: 'COMING',
      league: "Al-Hambra, 2025",
      team1: {
        name: 'IIT Kalyani',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Indian_Institute_of_Information_Technology%2C_Kalyani_logo.png',
        score: '0',
        overs: '0'
      },
      team2: {
        name: 'MAKAUT',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNc0hcQ7KY_JBqHAZhsZ-0dRYljeiw4gG4A&s',
        score: '0',
        overs: '0'
      },
      result: 'Result'
    },
    {
      id: '5',
      status: 'COMING',
      league: "Al-Hambra, 2025",
      team1: {
        name: 'RKMGC',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLvehJAtbK4m_ehaEKI1bVV2BmeCZ_3sgww&s',
        score: '0',
        overs: '0'
      },
      team2: {
        name: 'Bengal Institute',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Top-logo.png',
        score: '0',
        overs: '0'
      },
      result: 'Result'
    },
  ];

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(current => current - 1);
      const cardWidth = carouselTrackRef.current.children[0].offsetWidth + 20; // Card width + gap
      carouselTrackRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (currentSlide < matches.length - 1) {
      setCurrentSlide(current => current + 1);
      const cardWidth = carouselTrackRef.current.children[0].offsetWidth + 20; // Card width + gap
      carouselTrackRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <button 
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          <FaChevronLeft />
        </button>

        <div className={styles.carouselTrack} ref={carouselTrackRef}>
          {matches.map(match => (
            <div key={match.id} className={styles.matchCard}>
              <div className={styles.matchHeader}>
                <span className={styles.matchNumber}>Match {match.id}</span>
                <span className={`${styles.matchStatus} ${
                  match.status === 'MATCH ENDED' 
                    ? styles.statusEnded 
                    : styles.statusUpcoming
                }`}>
                  {match.status}
                </span>
              </div>
              <hr className={styles.separator}/>
              <div className={styles.leagueName}>{match.league}</div>

              {match.status === 'UPCOMING' ? (
                <>
                  <div className={styles.timer}>
                    {Object.entries(match.countdown || {}).map(([unit, value]) => (
                      <div key={unit} className={styles.timeUnit}>
                        <div className={styles.timeValue}>{value}</div>
                        <div className={styles.timeLabel}>
                          {unit.toUpperCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.venue}>{match.venue}</div>
                </>
              ) : (
                <>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                    <div className={styles.scoreRow}>
                      <div className={styles.teamInfo}>
                        <img 
                          src={match.team1.logo} 
                          alt={match.team1.name}
                          className={styles.teamLogo}
                        />
                        <span className={styles.score}>{match.team1.score}</span>
                        <span className={styles.overs}>({match.team1.overs})</span>
                      </div>
                    </div>
                    <div className={styles.vsBadge}>VS</div>
                    <div className={styles.scoreRow}>
                      <div className={styles.teamInfo}>
                        <img 
                          src={match.team2.logo} 
                          alt={match.team2.name}
                          className={styles.teamLogo}
                        />
                        <span className={styles.score}>{match.team2.score}</span>
                        <span className={styles.overs}>({match.team2.overs})</span>
                      </div>
                    </div>
                  </div>
                  <hr className={styles.separator}/>
                  <div className={styles.matchResult}>{match.result}</div>
                </>
              )}
            </div>
          ))}
        </div>

        <button 
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={handleNext}
          disabled={currentSlide === matches.length - 1}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MatchesSection;