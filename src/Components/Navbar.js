import React from 'react';
import './navBar.css'


const Navbar = () => {


    return (
        <>
            <nav className='navBar'>
                <h1 ><a href='#home' className='webTitle'>WINDOWPROS</a></h1>
                <section className='linksSection'>
                    <a href='#quote' className='links'>Quote</a>
                    <a href='#services' className='links'>Services</a>
                    <a href='#reviews' className='links'>Reviews</a>
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