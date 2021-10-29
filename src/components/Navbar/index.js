import React from 'react';
import { FaUser, FaFileAlt, FaProjectDiagram, FaMobileAlt  } from 'react-icons/fa';
import resume from '../../assets/files/Luce_Resume.A.pdf';
import './nav.css';

function Nav(props){
    const { contactSelected, setContactSelected } = props;

    <Nav>contactSelected={contactSelected} setContactSelected={setContactSelected}</Nav>
    return (

        
        /*{see if it would be better to seperate this nav from header}
        handle the onClick events l8r*/
        <header className="flex-row px-1">
            <h2>
                <a className="mx-2" data-testid="link" href="/">
                   Caroline Luce
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <span data-testid="about" href="#about" onClick={() => setContactSelected(false)}> <FaUser /> Bio</span> 
                    </li>
                    <li className="mx-2">
                        <span onClick={() => setContactSelected(true)}> <FaMobileAlt /> Contact</span>
                    </li>
                    <li className="mx-2">
                        <span data-testid="portfolio" href="#portfolio"onClick={() => setContactSelected(false)}> <FaProjectDiagram /> Portfolio</span>
                    </li>
                    <li className="mx-2">
                        <a href={resume}onClick={() => setContactSelected(false)}> <FaFileAlt /> Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

