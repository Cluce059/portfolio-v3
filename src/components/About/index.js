import React from 'react';
import pfp from '../../assets/img/pfp.jpg';

function About(){
    
    return (
        <section id="about">
            <div className="pfp-div">
                <img className="pfp-img" src = {pfp}   alt="my profile pic" className="pfp"/>
            </div>
            <div className="about-div">
                <p>Boot Camp Sudent || Web Development || UCF Graduate || Environmental Science || Geostatistical Analysis</p>
            </div>
        </section>
    );
}

export default About;