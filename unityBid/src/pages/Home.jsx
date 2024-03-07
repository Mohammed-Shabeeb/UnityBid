import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Logo from "../assets/UnityBid-logos_white.png"
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-home">
          <div className="home-homeName">
              <div className="home-logoContainer">
                <img src={Logo} alt="Logo" />
              </div>
          </div>
          <div className="home-homeContent">
              
          </div>
      </div>
        Communities
      <div className="home-communities">

      </div>
        Auctions
      <div className="home-auctions">

      </div>
    </div>
  )
}

export default Home