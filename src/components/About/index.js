import React from 'react';
import pfp from '../../assets/img/pfp.jpg';

function About(){
    return (
        <section id="about" className="about">
                <div className="about-info">
                <div className="about-container">
            <div className="pfp-div" id="box">
                <img src = {pfp}   alt="my profile pic" className="pfp"/>
            </div>
            <div className="flex-row">
            <h2 class="section-title">Background</h2>
            </div>
                <p>Hello! My name is Caroline and I am excited to share with you my background and experience. I graduated from the University of Central Florida last May with a bachelor's degree in Environmental Studies and a certificate in Geographic Information Systems. I have many endeavors from making glass art in my spare time to continuing my education in computer science. After a busy day, I like to take time off to play games and have coffee on my porch with my cat. Reach out via phone or email if you have any questions or just want to say hey!</p>
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