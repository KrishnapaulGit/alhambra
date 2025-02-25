import React from 'react';
import { 
  FaArrowRight, 
  FaChevronRight,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';
import styles from './CricketDashboard.module.css';
import MatchesSection from '../MatchesSection/MatchesSection';

const CricketDashboard = () => {
  const pointsData = [
    {
      rank: 1,
      team: "KGEC",
      logo: "https://avatars.githubusercontent.com/u/22374232?s=280&v=4",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 2,
      team: "AOT",
      logo: "https://w7.pngwing.com/pngs/348/131/png-transparent-academy-of-technology-asansol-engineering-college-maulana-abul-kalam-azad-university-of-technology-hooghly-institute-of-technology-technology-blue-angle-electronics-thumbnail.png",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 3,
      team: "IDEAL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16Tmt3Q-97bUfZmcC6t-bDrbo3uECbdfz1g&s",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 4,
      team: "JIS",
      logo: "https://img.favpng.com/2/7/20/jis-college-of-engineering-organization-logo-supreme-knowledge-foundation-group-of-institutions-png-favpng-Jm4tzc7uG4kkLJA1LDLwadH8z.jpg",
     played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 5,
      team: "IQCITY",
      logo: "https://i.ytimg.com/vi/9vN_cYHYg5w/maxresdefault.jpg",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 6,
      team: "GCETTS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlkQ9sk-DtNg4XNbElf-JTuqmcgwXNgEAPg&s",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 7,
      team: "IIIT Kalyani",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Indian_Institute_of_Information_Technology%2C_Kalyani_logo.png",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 8,
      team: "MAKAUT",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNc0hcQ7KY_JBqHAZhsZ-0dRYljeiw4gG4A&s",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 9,
      team: "RKMGC",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLvehJAtbK4m_ehaEKI1bVV2BmeCZ_3sgww&s",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    {
      rank: 10,
      team: "Bengal Institute",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Top-logo.png",
      played: 0,
      nrr: "0",
      points: 0,
      form: ["", ""]
    },
    
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'LIVE':
        return styles.live;
      case 'MATCH ENDED':
        return styles.ended;
      case 'UPCOMING':
        return styles.upcoming;
      default:
        return '';
    }
  };

  const getRankClass = (rank) => {
    switch (rank) {
      case 1:
        return styles.firstRank;
        break;
      case 2:
        return styles.secondRank;
        break;
      case 3 :
        return styles.threeRank;
        break;
      case 4:
        return styles.fourRank;
        break;
      default:
        return '';
        break;
    }
  }


  return (
    <div className={styles.container}>
      {/* Points Table Section */}
      <div className={styles.pointsTableContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>POINTS TABLE</h2>
        </div>
        
        <div className={styles.pointsScroll}>
          {pointsData.map((team) => (
            <div key={team.rank} className={styles.teamCard}>
              <div className={styles.teamHeader}>
                <span className={`${styles.teamRank} ${getRankClass(team.rank)}`}>{team.rank}</span>
                <img src={team.logo} alt={team.team} className={styles.teamLogo} />
                <div className={styles.teamName}>{team.team}</div>
              </div>
              
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{team.played}</div>
                  <div className={styles.statLabel}>PLD</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{team.nrr}</div>
                  <div className={styles.statLabel}>N/R</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{team.points}</div>
                  <div className={styles.statLabel}>PTS</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.formIndicators}>
                    {team.form.map((result, idx) => (
                      <span 
                        key={idx}
                        className={`${styles.statValue} ${result === 'w' ? styles.win : styles.loss}`}
                      >
                        {result.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <div className={styles.statLabel}>FORM</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <button className={styles.viewMore}>
            VIEW MORE <FaChevronRight />
          </button> */}
      </div>

      {/* Matches Section */}
      <div>
        <div className={styles.matchesSection}>
        <h2 className={styles.sectionTitle}>MATCHES</h2>
        </div>
        <MatchesSection />
      </div>
    </div>
  );
};

export default CricketDashboard;