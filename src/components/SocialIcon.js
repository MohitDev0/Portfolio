import React from 'react';
import { Link } from '@mui/material';

const SocialIcon = () => {
    return (
        <>
            <div className="container">
                <div className='social_icon'>
                    <div className='github_link icon'>
                        <Link href="https://github.com/MohitDev0" underline="none" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.png" alt="Github logo" />
                        </Link>
                    </div>
                    <div className='linkedin_link icon'>
                        <Link href="https://www.linkedin.com/in/mohit-sn" underline="none" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.png" alt="LinkedIn logo" />
                        </Link>
                    </div>
                    <div className='email_link icon'>
                        <Link href="mailto: mohitsn.dev0@gmail.com" underline="none" target="_blank" rel="noopener noreferrer">
                            <img src="/images/gmail.png" alt="Gmail logo" />
                        </Link>
                    </div>
                    <div className='whatsapp icon'>
                        <Link href="https://wa.me/7404460178" underline="none" target="_blank" rel="noopener noreferrer">
                            <img src="/images/whatsapp.png" alt="Whatsapp logo" />
                        </Link>
                    </div>
                    <div className="contact_container">
                        <div className="contact_inner">
                            <Link href="tel:7404460178" underline="none" target="_blank" rel="noopener noreferrer">
                                <div className="contact icon">

                                    <img src="/images/phone.png" alt="Phone logo" />

                                </div>
                                <span><p>7404460178</p></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SocialIcon;