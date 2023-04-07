import React from "react";
import './home.css';
import './animations.css';
import Reviews from "./Reviews";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Quote from "./Quote";

const Home = () => {

    window.addEventListener('scroll', function () { revealItems(".reveal1", 150) });
    window.addEventListener('scroll', function () { revealItems(".reveal2", 100) });
    window.addEventListener('scroll', function () { revealItems(".reveal3", 200) });
    window.addEventListener('scroll', function () { revealItems(".reveal4", 50) });

    function revealItems(className, revealPoint) {
        var reveals = document.querySelectorAll(className);

        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;

            if (revealtop < windowheight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
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
                                <span>The </span>
                                <span>Best Window Cleaning</span><span className="cityPart">
                                    in <spam className="sloganWord typewriter"></spam>
                                </span> </h1>
                            <p className="subSlogan">The best cleaning results are guaranteed by our 100% Happiness Guarantee</p>
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
                        <img className="experienceIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/128/4701/4701305.png" />
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
                        <img className="insuredIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/128/3176/3176280.png" />
                        <p>Monthly, fortnighthly weelky discounts</p>
                    </section>
                </div>
            </section>

            <Quote />

            <br id="reviews"></br>
            <br></br>
            <br></br>
            <Reviews />

            <section className="secondBox fifthBox">
                <div className="secondBoxLeft">
                    <p className="orangeStyle">OUR SERVICES</p>
                    <h1 className="secondTitle">What You Get</h1>
                    <p className="secondDes">See the world in a new light with crystal-clear windows and efficient solar panels. Our cleaning services brighten up your home and help you save on energy bills. Experience the difference a professional clean can make.</p>
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
                        <img className="insuredIcon" alt="teamIcon" src="https://cdn-icons-png.flaticon.com/128/2950/2950657.png" />
                        <p>Unlimited respone customer service</p>
                    </section>
                </div>
            </section>

            <br id="services"></br>
            <br></br>
            <section className="sixthBox">
                <section className="serviceBoxes">
                    <div className="serviceBox ">
                        <img className="serviceIcon" alt="serviceIcon" src="https://cdn-icons-png.flaticon.com/512/2377/2377076.png" />
                        <h2>Residential</h2>
                        <p>Impress your guests and experience the joys of living in a clean house</p>
                        <p className="orangeStyle">Get a quote</p>
                    </div>
                    <div className="serviceBox">
                        <img className="serviceIcon" alt="serviceIcon" src="https://cdn-icons-png.flaticon.com/512/8027/8027641.png" />
                        <h2>Comercial</h2>
                        <p>Create a welcoming environment with a clean and well-maintained business space.</p>
                        <p className="orangeStyle">Get a quote</p>
                    </div>
                    <div className="serviceBox">
                        <img className="serviceIcon" alt="serviceIcon" src="https://cdn-icons-png.flaticon.com/512/2962/2962259.png" />
                        <h2>Solar panel</h2>
                        <p>Maximize your solar power with a spotless shine.</p>
                        <br></br>
                        <p className="orangeStyle">Get a quote</p>
                    </div>
                </section>
            </section>

            <ContactUs />

        </body >)
}

export default Home