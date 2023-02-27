import React, { useState } from 'react';
import './quote.css'

const Quote = () => {
    const [windows, setWindows] = useState(0)
    const [location, setLocation] = useState("Select location")
    const [duration, setDuration] = useState(0)

    // if (windows > 10 && windows < 20) {
    //     setDuration(1)
    // } else if (windows > 20) {
    //     setDuration(2)
    // }


    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };


    return (
        <>
            <br id="quote"></br>
            <br></br>
            <br></br>
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
                                <select className="selectLocationBox" onChange={handleLocationChange}>
                                    <option className="optionStyle" value="Select Location">Select location:</option>
                                    <option className="optionStyle" value="Oceanside">Oceanside</option>
                                    <option className="optionStyle" value="Vista">Vista</option>
                                    <option className="optionStyle" value="San Marcos">San Marcos</option>
                                    <option className="optionStyle" value="Escondido">Escondido</option>
                                    <option className="optionStyle" value="Carlsbad">Carlsbad</option>
                                    <option className="optionStyle" value="San Clemente">San Clemente</option>
                                    <option className="optionStyle" value="Fallbrook">Fallbrook</option>
                                    <option className="optionStyle" value="Del Mar">Del Mar</option>
                                    <option className="optionStyle" value="Encinitas">Encinitas</option>
                                    <option className="optionStyle" value="San Diego">San Diego</option>
                                </select>
                                <div className="iconContainer"></div>
                            </div>
                        </section>
                        <section className="quoteCategory">
                            <div className="stanIcon2"></div>
                            <p className="orangeStyle windowTitle">Windows</p>
                        </section>
                        <div className="addWindowBox">
                            <button className="windowBtn" onClick={() => { windows <= 0 ? setWindows(0) : setWindows(windows - 1) }}>-</button>
                            <h2 className="counter">{windows}</h2>
                            <button className="windowBtn" onClick={() => { setWindows(windows + 1) }}>+</button>
                        </div>
                    </div>
                </section>
                <section className="thirdBoxRight">
                    <p>SUBTOTAL</p>
                    <p className="price"><span>$</span>86</p>
                    <div className="priceDetails">
                        <div className="details">
                            <p>Location</p>
                            <p>{location}</p>
                        </div>
                        <div className="details">
                            <p>Duration</p>
                            <p>{duration}</p>
                        </div>
                        <div className="details">
                            <p>Windows</p>
                            <p>1</p>
                        </div>
                        <p className="continue">Get a quote</p>
                    </div>
                </section>
            </section >
        </>
    )
}

export default Quote