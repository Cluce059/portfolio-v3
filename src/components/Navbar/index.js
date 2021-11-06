import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import './nav.css';
import { Link } from 'react-router-dom';
import { NavbarData } from '../NavbarData';
import { IconContext } from 'react-icons';
//^edit icon props

function Navbar(props){
    const [sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
                </Link>
        </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaRegWindowClose />
                    </Link>
                    </li>
                {NavbarData.map((item, index) => {
                    return (
                        <li 
                            key={index}
                            className={item.className}>
                            {item.icon}
                            <span href = {item.id}>{item.title}</span>
                        </li>
                    );
                })}
                </ul>
            </nav>
            </IconContext.Provider>
            </>
    );
}

export default Navbar;



