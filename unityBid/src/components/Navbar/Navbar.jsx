import React, { useState } from 'react'
import "./Navbar.css"
import MobileNav from './MobileNav/MobileNav'
import { FiMenu } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

 
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
  return (
   <>

        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />


        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <div className="logo">
                    <h3>Unity Bid</h3>
                </div>

                <ul>
                    <li>
                        <ScrollLink className='menu-items' to='home' smooth={true}>Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='menu-items' to='skills' smooth={true}>Skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='menu-items' to='projects' smooth={true}>Projects</ScrollLink>
                    </li>
                    <li> 
                        <ScrollLink className='menu-items' to='contact' smooth={true}>Contact Me</ScrollLink>
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