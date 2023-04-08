import React, { useState } from 'react';
import './navBar.css'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
    }

    return (
        <>
            <nav className='navBar'>
                <h1><a href='#home' className='webTitle'>WINDOWPROS</a></h1>
                <div className='toggleButton' onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <section className={`linksSection ${showLinks ? 'show' : ''}`}>
                    <a href='#quote' className='links'>Get a quote</a>
                    <a href='#reviews' className='links'>Reviews</a>
                    <a href='#services' className='links'>Services</a>
                    <a href='#contact' className='links'>ContactUs</a>
                </section>
                <div className='numContainer'>
                    <a className='phoneLink' href="tel:+7606854653"><p className='myNum'>760-685-4653</p></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar