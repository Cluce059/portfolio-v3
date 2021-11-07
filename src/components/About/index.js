import React from 'react';
import pfp from '../../assets/img/pfp.jpg';

function About(){
    
    return (
        <section id="about" className="pfp-div">
        
            <div className="pfp-div" id="box">
                <img className="pfp-img" src = {pfp}   alt="my profile pic" className="pfp"/>
            </div>
            
        </section>
    );
}

export default About;