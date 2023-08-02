import React from 'react';

const About = () => {
    return(
        <div className="about">
            <h1>About Me</h1>
            <img src="#" alt="#" className="profile-photo"/>
            <p>
               I'm a Software Engineer with a passion for front-end development, 
               especially using modern technologies like React. I have 3+ years of experience 
               in the field and love working on complex, user-centric applications.
            </p>
            <p>You can reach me at <a href="#">email</a>.</p>
            <p>
                <a href="#">LinkedIn</a> | 
                <a href="#">GitHub</a>
            </p>
        </div>
    )
}

export default About;