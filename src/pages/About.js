import React from 'react';
import pfp from '../assets/img/pfp.jpg';

function About(){
    return (
        <section className="my-5">
            <img src = {pfp} className="my-2" style={{width: "20%"}} alt="profilePic"/>
            <h1 id="about">Background</h1>
                <p>Hello, my name is Caroline and I hate this old pic but its the only professional looking one i have rn some space with text until I know what to say here. This could be just a few sentences about my education/certificates and experience so far doing the bootcamp?</p>
            <h1>Education</h1>
                <p>UCF Bachelor of Science in Environmental Studies with Geographic Information Systems Certificate</p>
                <p>current coding bootcamp student</p>
            <h1>Skills</h1>
                <p>possibly leave this in resume? 2 much? idk</p>
            
        </section>
    );
}

export default About;