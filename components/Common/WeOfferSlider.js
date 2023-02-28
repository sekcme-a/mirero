import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

class WeOfferSlider extends Component {
    render() {
        return (
            <>
                <section className="services-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="section-title">
                            <h2>We Offer creative working environments</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            autoplay={{
                                delay: 6000,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="main-services-slides"
                        >
                            <SwiperSlide>
                                <div className="services-box">
                                    <img src="/images/gallery/gallery1.jpg" alt="image" />

                                    <div className="services-content">
                                        <h3>
                                            <Link legacyBehavior legacyBehavior href="/service-details">
                                                <a>Office Space</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="services-box">
                                    <img src="/images/gallery/gallery2.jpg" alt="image" />

                                    <div className="services-content">
                                        <h3>
                                            <Link legacyBehavior legacyBehavior href="/service-details">
                                                <a>Coworking</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="services-box">
                                    <img src="/images/gallery/gallery3.jpg" alt="image" />

                                    <div className="services-content">
                                        <h3>
                                            <Link legacyBehavior legacyBehavior href="/service-details">
                                                <a>Meeting Spaces</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="services-box">
                                    <img src="/images/gallery/gallery4.jpg" alt="image" />

                                    <div className="services-content">
                                        <h3>
                                            <Link legacyBehavior legacyBehavior href="/service-details">
                                                <a>Virtual Offices</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper> 
                    </div>
                </section>
            </>
        );
    }
}

export default WeOfferSlider;