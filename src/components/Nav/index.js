import React from "react";

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
                        <span data-testid="about" href="#about" onClick={() => setContactSelected(false)}>Bio</span> 
                    </li>
                    <li className="mx-2">
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li className="mx-2">
                        <span>Portfolio</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;