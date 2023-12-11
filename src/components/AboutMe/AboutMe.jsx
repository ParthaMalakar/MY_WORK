import React from 'react';
import './AbotMe.css'
const AboutMe = () => {
    return (
        <div>
            <section className="about space-y-3">
    <h3 className="section-title">About Me</h3>
    <img className='text-center h-60 mx-auto rounded-full' src="https://avatars.githubusercontent.com/u/102042225?v=4" alt="" />
    <p className="section-descripton max-w-5xl mx-auto">I am an enthusiastic and dedicated individual with a passion for web development. I seek a challenging role
where I can leverage my quick learning abilities, strong work ethic, and proficiency in adapting to new
technologies. I am eager to contribute my skills and take on responsibilities showcasing my commitment to
delivering efficient, high-quality results. Committed to continuous learning and growth, I am ready to embark
on a journey where I can apply my expertise and positively impact the team and organization.</p>
<div className="about-info max-w-4xl mx-auto">
    <div className="about-in">
        <h4 className="info-title">Name:</h4>
        <p className="info-description">Partha Malakar</p>
    </div>
    <div className="about-in">
        <h4 className="info-title">Email:</h4>
        <p className="info-description">parthamalakar667@gmail.com</p>
    </div>
    <div className="about-in">
        <h4 className="info-title">Date of birth:</h4>
        <p className="info-description">03 February 2001</p>
    </div>
    <div className="about-in">
        <h4 className="info-title">From:</h4>
        <p className="info-description">Dohar,Joypara,Dhaka</p>
    </div>
</div>
    </section>
        </div>
    );
};

export default AboutMe;