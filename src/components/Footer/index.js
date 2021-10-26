import React from "react";
import resume from '../../assets/files/Luce_Resume.A.pdf';


function Footer(){
    const links ={
        linkedIn: 'https://www.linkedin.com/in/caroline-luce-a314b1224/',
        github: 'https://github.com/Cluce059',
        stackOverflow: 'https://stackoverflow.com/users/17255139/caroline',
        resume: resume
    }
    return (
        <footer>
            <ul className="flex-row">
                <li>
                    <a href={links.github} className="mx-2">Github</a>
                </li>
                <li >
                    <a href={links.linkedIn}className="mx-2">LinkedIn</a>
                </li>
                <li>
                    <a href={links.stackOverflow} className="mx-2">StackOverflow</a>
                </li>
                <li>
                    <a href={links.resume}  className="mx-2">Resume</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;