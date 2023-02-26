import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './home.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

const Reviews = () => {
    return (
        <>
            <section className="fourthSection">
                <div className="topFourth">
                    <p className="orangeStyle customers">Our customers are important to us</p>
                    <p className="reviewSlogan">From our customer service to our expert window cleaning, we make each and every customer happy!</p>
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
                            <img className="quoteIcon" alt="avatarImage" src="https://cdn-icons-png.flaticon.com/512/157/157247.png" />
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
        </>
    )
}

export default Reviews