import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import './nav.css';
import { Link } from 'react-router-dom';
import { NavbarData } from '../NavbarData';
import { IconContext } from 'react-icons';
//^edit icon props

function Navbar(props){
    //const { contactSelected, setContactSelected } = props;
    const [sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //<Navbar>contactSelected={contactSelected} setContactSelected={setContactSelected}</Navbar>
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
                            <Link to={item.path}>
                                    {item.icon}
                                <span>{item.title}</span>
                            </Link>
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

/**
                    <li className="navbar-toggle mx-2">
                        <span data-testid="about" href="#about" onClick={() => setContactSelected(false)}> <FaIcons.FaUser /> Bio</span> 
                    </li>
                    <li className="navbar-toggle">
                        <span onClick={() => setContactSelected(true)}> <FaIcons.FaMobileAlt /> Contact</span>
                    </li>
                    <li className="navbar-toggle">
                        <span data-testid="portfolio" href="#portfolio"onClick={() => setContactSelected(false)}> <FaIcons.FaProjectDiagram /> Portfolio</span>
                    </li>
                    <li className="navbar-toggle">
                        <a href={resume}onClick={() => setContactSelected(false)}> <FaIcons.FaFileAlt /> Resume</a>
                    </li> */
