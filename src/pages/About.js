import React from 'react';
//import pfp from '../../assets/img/pfp.jpg';

function About(){
    return (
        <section id="about" className="about">
                <div className="about-info">
                <div className="about-container">
            {/* <div className="pfp-div" id="box">
                <img src = {pfp}   alt="my profile pic" className="pfp"/>
            </div> */}
            <div className="flex-row">
            <h2 class="section-title">Background</h2>
            </div>
               
            <div className="flex-row">
            <h2 class="section-title">Education</h2>
            </div>
                <p>UCF Bachelor of Science in Environmental Studies with Geographic Information Systems Certificate</p>
                <p>current coding boot camp student</p>
            </div>
            </div>
        </section>
    );
}

export default About;