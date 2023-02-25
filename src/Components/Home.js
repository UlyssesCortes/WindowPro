import React from "react";
import './home.css'
import Reviews from "./Reviews";
import Navbar from "./Navbar";

const Home = () => {
    window.addEventListener('scroll', reveal1);
    window.addEventListener('scroll', reveal2);
    window.addEventListener('scroll', reveal3);
    window.addEventListener('scroll', reveal4);

    function reveal1() {
        var reveals = document.querySelectorAll('.reveal1');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
    function reveal2() {
        var reveals = document.querySelectorAll('.reveal2');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
    function reveal3() {
        var reveals = document.querySelectorAll('.reveal3');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
    function reveal4() {
        var reveals = document.querySelectorAll('.reveal4');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
    return (
        <body>
            <Navbar />
            <section id="home" className="mainSecTop">
                <section className="leftSection">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="leftBoxContainer">
                        <div className="leftTextTop">
                            <h1 className="slogan">
                                <span>The Best </span>
                                <span>Window Cleaning</span><span className="cityPart">
                                    in <spam className="sloganWord typewriter"></spam>
                                </span> </h1>
                            <p className="subSlogan">Our 100% Happiness Guarantee ensures that you receive the best cleaning</p>
                        </div>
                        <section className="firstServiceSec">
                            <div className="homeClening">
                                <div className="homeIcon"></div>
                                <h2 className="homeCleaningTitle">Residential</h2>
                                <p className="homeDes">
                                    Save your time and money with online booking and flat rate pricing!
                                </p>
                                <p className="orangeStyle">Get a quote</p>
                            </div>
                            <div className="commercialCleaning">
                                <div className="comercialIcon"></div>
                                <h2 className="comercialCleaning">Comercial</h2>
                                <p className="homeDes">We offer competitive rates for workspaces big and small</p>
                                <p className="comercialQuote">Get a quote</p>
                            </div>
                        </section>

                    </div>
                </section>
                <section className="rightSection">
                    <div className="rightImage"></div>
                </section>
            </section>

            <section className="secondBox">
                <div className="secondBoxLeft">
                    <p className="orangeStyle">OUR BENEFITS</p>
                    <h1 className="secondTitle">What We Offer</h1>
                    <p className="secondDes">We provide online quote, lightning fast customer service, fantastic organic cleaning using only eco sustainable queality cleaning products, pricing that beats the competitors and 100% satisfaction guarantee every time!</p>
                </div>
                <div className="secondBoxRight ">
                    <section className="offerSec reveal1">
                        <img className="experienceIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/4064/4064243.png" />
                        <p>100% Satisfaction guarantee</p>
                    </section>
                    <section className="offerSec reveal2">
                        <img className="equipmentIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/3815/3815452.png" />
                        <p>Secure online quote</p>
                    </section>
                    <section className="offerSec reveal3">
                        <img className="insuredIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/8909/8909186.png" />
                        <p>Green, eco-friendly cleaning</p>
                    </section>
                    <section className="offerSec reveal4">
                        <img className="insuredIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/2169/2169846.png" />
                        <p>Monthly, fortnighthly weelky discounts</p>
                    </section>
                </div>
            </section>

            <section id="quote" className="thirdBox">
                <section className="thirdBoxLeft">
                    <p className="orangeStyle">PRICING</p>
                    <h1>Quick Quote</h1>
                    <p className="thirdBoxDes">Save your time and money with online quoting and flat rate pricing!</p>
                    <div className="quickForm">
                        <section className="quoteCategory">
                            <div className="stanIcon"></div>
                            <p className="orangeStyle locationTitle">Location</p>
                            <div class="selectLocationContainer">
                                <select className="selectLocationBox">
                                    <option className="optionStyle" value="0">Select location:</option>
                                    <option className="optionStyle" value="1">Oceanside</option>
                                    <option className="optionStyle" value="2">Vista</option>
                                    <option className="optionStyle" value="3">San Marcos</option>
                                    <option className="optionStyle" value="4">Escondido</option>
                                    <option className="optionStyle" value="5">Carlsbad</option>
                                    <option className="optionStyle" value="6">San Clemente</option>
                                    <option className="optionStyle" value="7">Fallbrook</option>
                                    <option className="optionStyle" value="8">Del Mar</option>
                                    <option className="optionStyle" value="9">Encinitas</option>
                                    <option className="optionStyle" value="10">San Diego</option>
                                </select>
                                <div className="iconContainer"></div>
                            </div>
                        </section>
                        <section className="quoteCategory">
                            <div className="stanIcon2"></div>
                            <p className="orangeStyle windowTitle">Windows</p>
                        </section>
                        <div className="addWindowBox">
                            <button className="windowBtn">-</button>
                            <h2 className="counter">0</h2>
                            <button className="windowBtn">+</button>
                        </div>
                    </div>
                </section>
                <section className="thirdBoxRight">
                    <p>SUBTOTAL</p>
                    <p className="price"><span>$</span>86</p>
                    <div className="priceDetails">
                        <div className="details">
                            <p>Location</p>
                            <p>Oceanside</p>
                        </div>
                        <div className="details">
                            <p>Duration</p>
                            <p>3 Hours</p>
                        </div>
                        <div className="details">
                            <p>Windows</p>
                            <p>1</p>
                        </div>
                        <p className="continue">Get a quote</p>
                        <div className="sideArrowIcon"></div>
                    </div>
                </section>
            </section >

            <Reviews />

            <section className="secondBox fifthBox">
                <div className="secondBoxLeft">
                    <p className="orangeStyle">OUR SERVICES</p>
                    <h1 className="secondTitle">What You Get</h1>
                    <p className="secondDes">We provide online quote, lightning fast customer service, fantastic organic cleaning using only eco sustainable queality cleaning products, pricing that beats the competitors and 100% satisfaction guarantee every time!</p>
                </div>
                <div className="secondBoxRight">
                    <section className="offerSec reveal1">
                        <img className="experienceIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/2058/2058768.png" />
                        <p>Highly experienced cleaning team</p>
                    </section>
                    <section className="offerSec reveal2">
                        <img className="equipmentIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/2554/2554117.png" />
                        <p>All equipment and chemicals provided</p>
                    </section>
                    <section className="offerSec reveal3">
                        <img className="insuredIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/3188/3188097.png" />
                        <p>Insured service against damages</p>
                    </section>
                    <section className="offerSec reveal4">
                        <img className="insuredIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/512/3114/3114553.png" />
                        <p>Unlimited respone customer service</p>
                    </section>
                </div>
            </section>

            <section id="services" className="sixthBox">
                <section className="serviceBoxes">
                    <div className="serviceBox ">
                        <img className="serviceIcon" alt="serviceIcon" src="https://cdn-icons-png.flaticon.com/512/2377/2377076.png" />
                        <h2>Standard</h2>
                        <p>Impress your guests and experience the joys of living in a clean house</p>
                        <p className="orangeStyle">Get a quote</p>
                    </div>
                    <div className="serviceBox">
                        <img className="serviceIcon" alt="serviceIcon" src="https://cdn-icons-png.flaticon.com/512/8027/8027641.png" />
                        <h2>Comercial</h2>
                        <p>Impress your guests and experience the joys of living in a clean house</p>
                        <p className="orangeStyle">Get a quote</p>
                    </div>
                    <div className="serviceBox">
                        <img className="serviceIcon" alt="serviceIcon" src="https://cdn-icons-png.flaticon.com/512/2962/2962259.png" />
                        <h2>Solar panel</h2>
                        <p>Impress your guests and experience the joys of living in a clean house</p>
                        <p className="orangeStyle">Get a quote</p>
                    </div>
                </section>
            </section>


        </body >)
}

export default Home