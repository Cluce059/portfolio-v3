import React from 'react';
//import * as FaIcons from 'react-icons/fa'; { useState }
import './nav.css';
//import { Link } from 'react-router-dom';
//import { IconContext } from 'react-icons';

class Navbar extends React.Component {
    state = {
      menuToggle: false
    }

  render() {
    return (
        <>
      <nav id="navbar" class="">
  <div class="nav-wrapper">
    <div class="logo">
      <a href="#home"><i class="fas fa-chess-knight"></i> Caroline Luce </a>
    </div>

    <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>

<div class="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
</>
    )
    }
  }




export default Navbar;





























/** 
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
                        <li href = {item.id}
                            key={index}
                            className={item.className}>
                            {item.icon}
                            <span>{item.title}</span>
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
*/



