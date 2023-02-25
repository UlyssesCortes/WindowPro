import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './home.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

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
                        <p className="continue">Get a quote</p>
                        <div className="sideArrowIcon"></div>
                    </div>
                </section>
            </section >

            <section className="fourthSection">
                <div className="topFourth">
                    <p className="orangeStyle customers">We Love our customers</p>
                    <p className="reviewSlogan">We make every single customer happy with everything we do from customer service to our professional window cleaning!</p>
                </div>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"2"}
                    loop={true}
                    initialSlide={"1"}
                    autoplay={{
                        delay: 12000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/photo/t6BQc8siWrEr25p3REvaSA/90s.jpg" alt="ava" />
                            <p className="quote">The sunset was beautiful last night...we enjoyed it even more because we just had our windows and screens cleaned by Window Pros! Super professional and efficient! I joked that it will rain now that we had clean windows and John, the owner, said to call him if it did rain and we needed a little touch up! What remarkable customer service!</p>
                            <div className="reviwerName">
                                <p>Dana W. </p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/photo/xEfqK4HSNbBOa4hEdBVcdQ/90s.jpg" alt="ava" />
                            <p className="quote">Not only are the windows spotless and the screens looking like new, you will be treated as a valuable customer. They are careful around your landscape and furnishings, always on time. True pros.</p>
                            <div className="reviwerName">
                                <p>Patty B.</p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/photo/ViXBKalQPxOx-pNZmqiyRQ/90s.jpg" alt="ava" />
                            <p className="quote">Second time using Window Pros! Adam and Gabe were on time, clean, polite and super nice. My windows, screens and runners are spotless! Can't say enough - highly recommend!</p>
                            <div className="reviwerName">
                                <p>Kim And Mark B.</p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" alt="ava" />
                            <p className="quote">Window Pros were recommended by two of my neighbors. They did an amazing job at my home too!! Gabe was friendly, professional and very thorough. My windows, screens and tracks look brand new again. I'll definitely use them again.
                            </p>
                            <div className="reviwerName">
                                <p>Susan H.</p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" alt="ava" />
                            <p className="quote">Amazing!! Window Pros cleans windows at my work and they are always so professional and polite. So I decided to hire them at my house and they did a terrific job. My Windows looked like new again. The windows, tracks and screens all looked great!!</p>
                            <div className="reviwerName">
                                <p>Natalie N.</p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mySlide">
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" alt="ava" />
                            <p className="quote">We recently had our windows cleaned by Window Pros and he did an excellent job. He worked very hard and I really appreciate the care and detail he took for each Window.  Since it was a two story house it was not an easy job.  I would highly recommend this company and will use them again
                            </p>
                            <div className="reviwerName">
                                <p>Beverly D.</p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mySlide">
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/photo/zVPeB-ylTsgCceCxc0l2Sg/90s.jpg" alt="ava" />
                            <p className="quote">John, the owner, has been cleaning my windows for over 20 years now. He has become a dear friend and I look forward to the 6 month cleaning so we also have a little time to visit. He is a perfectionist when it comes to sparkling windows and also cleans the screens and mirrors throughout the home.
                            </p>
                            <div className="reviwerName">
                                <p>Elizabeth K.</p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mySlide">
                        <div className="item">
                            <img className="avatarImage" src="https://s3-media0.fl.yelpcdn.com/photo/GfQElNHbZqNSYwPLS4pz_Q/90s.jpg" alt="ava" />
                            <p className="quote">John, the person who cleaned my windows, arrived at the exact time promised, was finished really quickly, did an outstanding job, and the price was very reasonable. My windows are 2nd story, and have large bushes blocking the way, but he still managed to get the job done, with a great attitude and did an amazing job. I will definitely use this company again. Professional, friendly and great results. Highest recommendation.
                            </p>
                            <div className="reviwerName">
                                <p>Debbie H.</p>
                                <img className="fiveStarReview" src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt="reviewStar" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="secondBox fifthBox">
                <div className="secondBoxLeft">
                    <p className="orangeStyle">OUR SERVICES</p>
                    <h1 className="secondTitle">What You Get</h1>
                    <p className="secondDes">We provide online quote, lightning fast customer service, fantastic organic cleaning using only eco sustainable queality cleaning products, pricing that beats the competitors and 100% satisfaction guarantee every time!</p>
                </div>
                <div className="secondBoxRight">
                    <section className="offerSec">
                        <div className="experienceIcon"></div>
                        <p>Highly experienced cleaning team</p>
                    </section>
                    <section className="offerSec">
                        <p><div className="equipmentIcon"></div>All equipment and chemicals provided</p>
                    </section>
                    <section className="offerSec">
                        <p><span className="insuredIcon"></span>Insured service against damages</p>
                    </section>
                    <section className="offerSec">
                        <p><span className="chatIcon"></span>Unlimited respone customer service</p>
                    </section>
                </div>
            </section>

            <section className="sixthBox">
                <section className="serviceBoxes">
                    <div className="serviceBox">
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
            {/* <section className="seventhSection">
                <div className="leftText">
                    <h2>Online Quote</h2>
                    <p>Save your time and money with online quoteing and flat rate pricing!</p>
                    <p className="orangeStyle">Get a quote</p>
                </div>
            </section> */}

        </body >)
}

export default Home