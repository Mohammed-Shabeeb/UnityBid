import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import "./Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-home">
        Home
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