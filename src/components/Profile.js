import React, { useEffect, useState } from 'react';
import Animation from './Animation';

export const Profile = () => {
    const profile = ["Full Stack Web Developer", "MERN Stack Web Developer", "Front-End Web Developer", "Back-End Web Developer"];
    const [change, setchange] = useState(0);
    let profileSelect = profile[change];
    useEffect(() => {
        let index = 0;
        let count = 0;

        const intervalId = setInterval(() => {
            if (index < profileSelect.length) {
                document.getElementById("profile").innerText += profileSelect[index];
                index++;
                count++;
            } else {

                clearInterval(intervalId);
                setTimeout(() => {
                    const secondInterval = setInterval(() => {
                        if (count > 0) {
                            document.getElementById("profile").innerText = document.getElementById("profile").innerText.slice(0, -1)
                            count--;
                        } else {
                            if (change < profile.length - 1) {
                                setchange(prev => prev + 1);
                            } else {
                                setchange(0);
                            }
                            clearInterval(secondInterval);
                        }
                    }, 100)
                }, 2000)

            }
        }, 100)
    }, [change, profileSelect, profile.length])


    const downloadFile = () => {
        const fileUrl = '/resume/Mohit_saini_7404460178.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };




    return (
        <div className='Profile_container'>
            <Animation />
            

            <div className='profile_content'>
                <Animation />
                <h1>Hello , I'm Mohit</h1>
                <pre><div id="profile"></div></pre>

                <div>
                    <p className='profile_disc'>"Welcome to my portfolio! I'm Mohit, a passionate full stack web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a strong foundation in front-end and back-end development, I create dynamic and interactive web applications that deliver seamless user experiences.</p>
                    <Animation />
                </div>
                <button id='cv' onClick={() => downloadFile()} className='btn'>Download CV</button>
            </div>
        </div>
    )
}
