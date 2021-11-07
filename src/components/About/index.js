import React from 'react';
import pfp from '../../assets/img/pfp.jpg';

function About(){
    
    return (
        <section id="about">
            <div className="pfp-div">
                <img className="pfp-img" src = {pfp}   alt="my profile pic" className="pfp"/>
            </div>
        </section>
    );
}

export default About;