import React from "react";
import * as FaIcons from 'react-icons/fa';
import resume from '../../assets/files/Luce_Resume.A.pdf';

export const NavbarData = [
    {
        title: 'Bio',
        path: '/',
        icon: <FaIcons.FaUser/>,
        className: 'nav-text'
    },
    {
        title: 'Portfolio',
        path: '/',
        icon: <FaIcons.FaProjectDiagram />,
        className: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/',
        icon: <FaIcons.FaMobileAlt />,
        className: 'nav-text'
    },
    {
        title: 'Resume',
        path: resume,
        icon: <FaIcons.FaFileAlt />,
        className: 'nav-text'
    }
];