import React, { useState } from 'react'
import "./Navbar.css"
import MobileNav from './MobileNav/MobileNav'
import { FiMenu } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

 
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

  return (
   <>

        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />


        <nav className='nav-wrapper'>
            <div className='nav-content'>
            <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />

                <ul>
                    <li>
                        <ScrollLink className='menu-items' to='home-home' smooth={true}>Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='menu-items' to='home-communities' smooth={true}>Communities</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='menu-items' to='home-auctions' smooth={true}>Auctions</ScrollLink>
                    </li>

                    
                </ul>

                 <button className="menu-btn" onClick={toggleMenu}>
                    <FiMenu />
                    
                 </button>
            </div>
        </nav>
   </>
  )
}

export default Navbar