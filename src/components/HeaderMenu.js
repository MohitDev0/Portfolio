import React from 'react'

const HeaderMenu = () => {
    return (
        <>
            <div className='navbar'>
                <ul className='menu'>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="/resume/Mohit_saini_7404460178.pdf" target="_blank" >Resume</a></li>
                    <li><a href="tel:7404460178">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default HeaderMenu;