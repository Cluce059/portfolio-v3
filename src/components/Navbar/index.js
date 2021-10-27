import React from "react";
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


//import '@trendmicro/react-sidenav/dist/react-sidenav.css';
//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// function Navbar(props){
//     const { contactSelected, setContactSelected } = props;
//     const [scrolled, setScrolled] = React.useState(false);
//     const handleScroll=()=>{
//         const offset=window.scrollY;
//         if(offset > 200){
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     }
//     useEffect(()=> {
//         window.addEventListener('scroll',handleScroll)
//     })
//     let navbarClasses=['navbar'];
//     if(scrolled){
//         navbarClasses.push('scrolled');
//     }
//     <Navbar>contactSelected={contactSelected} setContactSelected={setContactSelected}</Navbar>
//     return (
// <header className="flex-row px-1">
//             <h2>
//                 <a className="mx-2" data-testid="link" href="/">
//                    Caroline Luce
//                 </a>
//             </h2>
//             <nav className ="navbar">
//                 <ul className="flex-row">
//                     <li className="mx-2">
//                         <span data-testid="about" href="#about" onClick={() => setContactSelected(false)}>Bio</span> 
//                     </li>
//                     <li className="mx-2">
//                         <span onClick={() => setContactSelected(true)}>Contact</span>
//                     </li>
//                     <li className="mx-2">
//                         <span>Portfolio</span>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// function Nav(props){
   

//     <Nav>contactSelected={contactSelected} setContactSelected={setContactSelected}
//     </Nav>
//     return (

        
//         /*would love to implement the sideNav, imported deps above^*/
        
//     );
// }

//export default Navbar;