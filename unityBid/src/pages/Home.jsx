import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Logo from "../assets/UnityBid-logos_white.png"
import "./Home.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { COMMUNITIES } from '../components/CommunityList';
import CommunityCard from '../components/CommunityCard';
import { AUCIONS } from '../components/AuctonList';
import { AuctionCard } from '../components/AuctionCard';

const Home = () => {

  const deviceType = window.innerWidth > 1024 ? "desktop" : window.innerWidth > 464 ? "tablet" : "mobile";

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <div className='home-container'>
      <div className="home-nav">
        <Navbar />
      </div>
      
      <div className="home-home">
          <div className="home-homeName">
              <div className="home-logoContainer">
                <img src={Logo} alt="Logo" />
              </div>
          </div>
          <div className="home-homeContent">
              
          </div>
      </div >
        
      <div className="home-communities">
        <h3>Communities</h3>
        <div className="home-community-content">
          <Carousel 
            responsive={responsive}
            showDots = {true}
            ssr = {true}
            infinite = {true}
            keyBoardControl = {true}
            
          >
            {COMMUNITIES.map((community, index) => (
              <CommunityCard key={index} details={community} />
            ))}
          </Carousel>

        </div>
      </div>
        
      <div className="home-auctions">
        <h3>Auctions</h3>

        <div className="home-auction-content">
          <Carousel 
            responsive={responsive}
            showDots = {true}
            ssr = {true}
            infinite = {true}
            keyBoardControl = {true}
            
          >
            {AUCIONS.map((aution, index) => (
              <AuctionCard key={index} details={aution} />
            ))}
          </Carousel>
        </div>
        
      </div>
    </div>
  )
}

export default Home