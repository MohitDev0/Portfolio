import React, { useState } from 'react';
import Experiences from "./subcomponents/Experiences";
import Skills from "./subcomponents/Skills";
import Project from "./subcomponents/Project";
import Education from "./subcomponents/Education";

const Experience = () => {
    const [activeLink, setActiveLink] = useState('link1');
    const handleButtonClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='exp_wrapper' id='education' >
            <div className='exp'>
                <h1>EDUCATION &</h1><h1> &nbsp; EXPERIENCES</h1>
            </div>
            <div className='desc'>
                As a BCA graduate with a specialization in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I possess a unique skill set that combines a strong foundation in computer applications with expertise in full-stack web development
            </div>
            <div className='ese' >
                <button
                    className={activeLink === 'link1' ? 'active btn' : 'btn'}
                    onClick={() => handleButtonClick('link1')}
                >Experience</button>
                <button
                    className={activeLink === 'link2' ? 'active btn' : 'btn'}
                    onClick={() => handleButtonClick('link2')}
                >Project</button>
                <button
                    className={activeLink === 'link3' ? 'active btn' : 'btn'}
                    onClick={() => handleButtonClick('link3')}
                >Skills</button>
                <button
                    className={activeLink === 'link4' ? 'active btn' : 'btn'}
                    onClick={() => handleButtonClick('link4')}
                >Education</button>
            </div>
            <div className={activeLink && `showitem ${activeLink}`}>
                {activeLink === 'link1' && <Experiences />}
                {activeLink === 'link2' && <Project />}
                {activeLink === 'link3' && <Skills />}
                {activeLink === 'link4' && <Education />}
            </div>
        </div>
    )
}

export default Experience