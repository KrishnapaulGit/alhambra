import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.js'; // Import Firestore
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import styles from './Dashboard.module.css'; // Import CSS

const Dashboard = () => {
  const [matchData, setMatchData] = useState({
    matchNumber: '',
    team1: '',
    team2: '',
    team1Logo: '',
    team2Logo: '',
    team1Score: '',
    team2Score: '',
    team1Overs: '',
    team2Overs: '',
    team1Text: '',
    team2Text: '',
    date: '',
    time: '',
    gmtTime: '',
    status: '',
    location: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch match data from Firestore
  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const matchRef = doc(db, 'matches', 'match7'); // Replace 'match7' with your document ID
        const docSnap = await getDoc(matchRef);

        if (docSnap.exists()) {
          setMatchData(docSnap.data());
        } else {
          setError('No such document!');
        }
      } catch (error) {
        setError('Error fetching match data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatchData({
      ...matchData,
      [name]: value,
    });
  };

  // Update match data in Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const matchRef = doc(db, 'matches', 'match7'); // Replace 'match7' with your document ID
      await updateDoc(matchRef, matchData);
      alert('Match data updated successfully!');
    } catch (error) {
      setError('Failed to update match data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <h1>Update Match Data</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Match Number</label>
          <input
            type="text"
            name="matchNumber"
            value={matchData.matchNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 1</label>
          <input
            type="text"
            name="team1"
            value={matchData.team1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 2</label>
          <input
            type="text"
            name="team2"
            value={matchData.team2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 1 Logo URL</label>
          <input
            type="text"
            name="team1Logo"
            value={matchData.team1Logo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 2 Logo URL</label>
          <input
            type="text"
            name="team2Logo"
            value={matchData.team2Logo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 1 Score</label>
          <input
            type="text"
            name="team1Score"
            value={matchData.team1Score}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 2 Score</label>
          <input
            type="text"
            name="team2Score"
            value={matchData.team2Score}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 1 Overs</label>
          <input
            type="text"
            name="team1Overs"
            value={matchData.team1Overs}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 2 Overs</label>
          <input
            type="text"
            name="team2Overs"
            value={matchData.team2Overs}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 1 Text</label>
          <input
            type="text"
            name="team1Text"
            value={matchData.team1Text}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Team 2 Text</label>
          <input
            type="text"
            name="team2Text"
            value={matchData.team2Text}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="text"
            name="date"
            value={matchData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type="text"
            name="time"
            value={matchData.time}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>GMT Time</label>
          <input
            type="text"
            name="gmtTime"
            value={matchData.gmtTime}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={matchData.status}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={matchData.location}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Match Data'}
        </button>
      </form>
    </div>
  );
};

export default Dashboard;