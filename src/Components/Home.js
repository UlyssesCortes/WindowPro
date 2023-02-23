import React from "react";
import './home.css'

const Home = () => {
    return (
        <body>
            <section className="mainSecTop">
                <section className="leftSection">
                    <h1 className="title">WindowPros</h1>
                    <div className="leftBoxContainer">
                        <div className="leftTextTop">
                            <h1 className="slogan">
                                <span>The Best </span>
                                <span>Window Cleaning</span><span className="cityPart">
                                    in <spam className="sloganWord">Oceanside</spam>
                                </span> </h1>
                            <p className="subSlogan">Our 100% Happiness Guarantee ensures that you receive the best cleaning</p>
                        </div>
                        <section className="firstServiceSec">
                            <div className="homeClening">
                                <div className="homeIcon"></div>
                                <h2 className="homeCleaningTitle">Home</h2>
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
                <div className="secondBoxRight">
                    <section className="offerSec">
                        <div className="satisfactionIcon"></div>
                        <p>100% Satisfaction guarantee</p>
                    </section>
                    <section className="offerSec">
                        <p><div className="quoteIcon"></div>Secure online quote</p>
                    </section>
                    <section className="offerSec">
                        <p><span className="ecoIcon"></span>Green, eco-friendly cleaning</p>
                    </section>
                    <section className="offerSec">
                        <p><span className="discountIcon"></span>Monthly, fortnighthly weelky discounts</p>
                    </section>
                </div>
            </section>

            <section className="thirdBox">
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
                        <p className="continue">Get a quote  &gt;</p>
                        {/* <div className="sideArrowIcon"></div> */}
                    </div>
                </section>
            </section >
            {/* <section className="fourthSection">
                <div className="topFourth">
                    <p className="orangeStyle">We Love our customers</p>
                    <p>We make every single customer happy with everything we do from customer service to our professional window cleaning!</p>
                </div>
                <section className="reviewsSection">
                    <div className="review">
                        <image className="avatarImage"></image>
                        <p className="quote">These guys mean business. They showed up fifteen minutes earlier than expected, and even thought it ttok a little longer they didn't complain. My house is spotless!</p>
                        <p><strong>Cayla Brister </strong>from linkeding</p>
                    </div>
                </section>
            </section>
            <section className="fifthBox">
                <div className="fifthBoxLeft">
                    <p className="orangeStyle">OUR SERVICES</p>
                    <h1>What you get</h1>
                    <p>We provide online quote, lightning fast customer service, fantastic organic cleaning using only eco sustainable queality cleaning products, pricing that beats the competitors and 100% satisfaction guarantee every time!</p>
                </div>
                <div className="fifthBoxRight">
                    <p>Highly experienced cleaning team</p>
                    <p>All equipment and chemicals provided</p>
                    <p>Insured service against damages</p>
                    <p>Unlimited respone customer service</p>
                </div>
            </section>
            <section className="sixthBox">
                <section className="serviceBoxes">
                    <div className="serviceBox">
                        <image className="serviceIcon"></image>
                        <h2>Standard</h2>
                        <p>Impress your guests and experience the joys of living in a clean house</p>
                        <p className="orangeStyle">Service List</p>
                    </div>
                    <div className="serviceBox">
                        <image className="serviceIcon2"></image>
                        <h2>Deep</h2>
                        <p>Impress your guests and experience the joys of living in a clean house</p>
                        <p className="orangeStyle">Service List</p>
                    </div>
                    <div className="serviceBox">
                        <image className="serviceIcon3"></image>
                        <h2>Moving</h2>
                        <p>Impress your guests and experience the joys of living in a clean house</p>
                        <p className="orangeStyle">Service List</p>
                    </div>
                </section>
            </section>
            <section className="seventhSection">
                <div className="leftText">
                    <h2>Online Quote</h2>
                    <p>Save your time and money with online quoteing and flat rate pricing!</p>
                    <p className="orangeStyle">Get a quote</p>
                </div>
            </section> */}

        </body >)
}

export default Home