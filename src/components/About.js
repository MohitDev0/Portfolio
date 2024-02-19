import React from 'react'

const About = () => {
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
        <div>
            <div className='about' id='about'>
                <div className='about_wrapper'>
                    <div className='about_heading'>
                        <h3>About</h3>
                        <h3>Me</h3>
                    </div>
                    <div className='personal_portofolio'>
                        <h2>Personal Info</h2>
                        <div className='info'>

                            <div className='personal_left'>
                                <div className='pl'><h4>Name: &nbsp; </h4><h4>Mohit</h4></div>
                                <div className='pl'><h4>Age: &nbsp; </h4><h4>23</h4></div>
                                <div className='pl'><h4>Nationality: &nbsp; </h4><h4>India</h4></div>
                                <div className='pl'><h4>Languages: &nbsp; </h4><h4>English , Hindi</h4></div>
                            </div>
                            <div className='personal_right'>
                                <div className='pl'><h4>Address: &nbsp; </h4><h4>Hansi , Hisar , Haryana</h4></div>
                                <div className='pl'><h4>Phone: &nbsp; </h4><h4><a href="tel:7404460178">7404460178</a></h4></div>
                                <div className='pl'><h4>Email: &nbsp; </h4><h4><a href="mailto: mohitsn.dev0@gmail.com">mohitsn.dev0@gmail.com</a></h4></div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => downloadFile()} className='btn'>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default About;