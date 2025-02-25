import React from 'react';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  const teams = [
    {
      id: 1,
      name: 'KGEC',
      subName: '',
      bgColor: '#EE1B24',
      logo: 'https://avatars.githubusercontent.com/u/22374232?s=280&v=4',
      image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
    },
    {
      id: 2,
      name: 'AOT',
      subName: '',
      bgColor: '#D8A53D',
      logo: 'https://w7.pngwing.com/pngs/348/131/png-transparent-academy-of-technology-asansol-engineering-college-maulana-abul-kalam-azad-university-of-technology-hooghly-institute-of-technology-technology-blue-angle-electronics-thumbnail.png',
      image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
    },
    {
      id: 3,
      name: 'IDEAL',
      subName: '',
      bgColor: '#004BA0',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16Tmt3Q-97bUfZmcC6t-bDrbo3uECbdfz1g&s',
      image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
    },
    {
      id: 4,
      name: 'JIS',
      subName: '',
      bgColor: '#D21C2F',
      logo: 'https://img.favpng.com/2/7/20/jis-college-of-engineering-organization-logo-supreme-knowledge-foundation-group-of-institutions-png-favpng-Jm4tzc7uG4kkLJA1LDLwadH8z.jpg',
      image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
    },
    {
      id: 5,
      name: 'IQCITY',
      subName: '',
      bgColor: '#663399',
      logo: 'https://i.ytimg.com/vi/9vN_cYHYg5w/maxresdefault.jpg',
      image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
    },
    {
        id: 6,
        name: 'GCETTS',
        subName: '',
        bgColor: '#EE1B24',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlkQ9sk-DtNg4XNbElf-JTuqmcgwXNgEAPg&s',
        image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
      },
      {
        id: 7,
        name: 'IIIT Kalyani',
        subName: '',
        bgColor: '#D8A53D',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Indian_Institute_of_Information_Technology%2C_Kalyani_logo.png',
        image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
      },
      {
        id: 8,
        name: 'MAKAUT',
        subName: '',
        bgColor: '#D21C2F',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNc0hcQ7KY_JBqHAZhsZ-0dRYljeiw4gG4A&s',
        image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
      },
      {
        id: 9,
        name: 'RKMGC',
        subName: '',
        bgColor: '#D21C2F',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLvehJAtbK4m_ehaEKI1bVV2BmeCZ_3sgww&s',
        image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
      },
      {
        id: 10,
        name: 'Bengal Institute',
        subName: '',
        bgColor: '#D21C2F',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Top-logo.png',
        image : 'https://github.com/KrishnapaulGit/Triweb/blob/main/crickettt-removebg-preview.png?raw=true'
      },
  ];

  return (
    <section className={styles.teamsSection}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
        <h2 className={styles.title}>TEAMS</h2>
        </div>
        <div className={styles.teamsGrid}>
          {teams.map((team) => (
            <div
              key={team.id}
              className={styles.teamCard}
              style={{ '--team-color': team.bgColor }}
            >
              <div className={styles.cardContent}>
                <img
                  src={team.image}
                  alt={`${team.name} ${team.subName} players`}
                  className={styles.teamImage}
                />
                <div className={styles.cardOverlay}>
                  <div className={styles.teamInfo}>
                    <div className={styles.logoWrapper}>
                      <img
                        src={team.logo}
                        alt={`${team.name} logo`}
                        className={styles.teamLogo}
                      />
                    </div>
                    <div className={styles.teamName}>
                      <h3>{team.name}</h3>
                      <h4>{team.subName}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;