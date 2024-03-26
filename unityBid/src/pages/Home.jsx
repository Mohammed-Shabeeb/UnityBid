import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Logo from "../assets/UnityBid-logos_white.png"
import "./Home.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { COMMUNITIES } from '../components/CommunityList';
import CommunityCard from '../components/CommunityCard';

const Home = () => {

  const deviceType = window.innerWidth > 1024 ? "desktop" : window.innerWidth > 464 ? "tablet" : "mobile";

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
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
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
          >
            {COMMUNITIES.map((community, index) => (
              <CommunityCard key={index} details={community} />
            ))}
          </Carousel>

        </div>
      </div>
        
      <div className="home-auctions">
        Auctions
      </div>
    </div>
  )
}

export default Home