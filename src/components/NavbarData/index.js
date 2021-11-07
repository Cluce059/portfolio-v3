import React from "react";
import * as FaIcons from 'react-icons/fa';
import resume from '../../assets/files/Luce-resume.C.pdf';

export const NavbarData = [
    {
        title: 'About',
        path: '/',
        icon: <FaIcons.FaUser/>,
        className: 'nav-text',
        id: '/about'
    },
    {
        title: 'Portfolio',
        path: '/',
        icon: <FaIcons.FaProjectDiagram />,
        className: 'nav-text',
        id: '/portfolio'
    },
    {
        title: 'Contact',
        path: '/',
        icon: <FaIcons.FaMobileAlt />,
        className: 'nav-text',
        id: '/contact'
    },
    {
        title: 'Resume',
        path: resume,
        icon: <FaIcons.FaFileAlt />,
        className: 'nav-text',
        id: '/resume'
    }
];