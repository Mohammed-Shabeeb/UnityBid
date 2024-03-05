import React, { useState } from 'react';
import "./MobileNav.css";
import { Link as ScrollLink } from 'react-scroll';

const MobileNav = ({ isOpen, toggleMenu }) => {

    

  return (
    <>
        
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <span className='logo'>Mohammed Shabeeb T</span>
                <ul>
                    <li>
                        <ScrollLink className='menu-item' to='home' smooth={true}>Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='menu-item' to='skills' smooth={true}>Skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='menu-item' to='projects' smooth={true}>Projects</ScrollLink>
                    </li>
                    <li> 
                        <ScrollLink className='menu-item' to='contact' smooth={true}>Contact Me</ScrollLink>
                    </li>

                    
                </ul>
                

                    
                
            </div>
        </div>
    </>
  );
};


export default MobileNav