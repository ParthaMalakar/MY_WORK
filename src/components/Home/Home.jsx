import React from 'react';
import Banner from '../Banner/Banner';
import EducationSection from '../Education/Education';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../MySkills/MySkills';
import Portfolio from '../Projects/Myproject';
import ContractMe from '../../ContractMe/ContractMe';

const Home = () => {
    return (
        <div>
<Banner>
    </Banner> 
    <EducationSection></EducationSection>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <ContractMe></ContractMe>
           </div>
    );
};

export default Home;