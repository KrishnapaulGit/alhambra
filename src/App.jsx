import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CricketDashboard from './Pages/CricketDashboard/CricketDashboard'
import HeroSection from './Pages/HeroSection/HeroSection'
import TeamSection from './Pages/TeamSection/TeamSection'
import Sponsor from './Pages/Sponsor/Sponsor'
const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <HeroSection/>
      <CricketDashboard />
      <TeamSection/>
      {/* <Dashboard/> */}
      <Sponsor/>
      <Footer />
    </div>
  )
}

export default App