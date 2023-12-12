import React from 'react';
import Banner from '../Banner/Banner';
import EducationSection from '../Education/Education';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../MySkills/MySkills';

const Home = () => {
    return (
        <div>
<Banner>
    </Banner> 
    <EducationSection></EducationSection>
    <AboutMe></AboutMe>
    <Skills></Skills>
           </div>
    );
};

export default Home;