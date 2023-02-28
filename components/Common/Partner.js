import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
class Partner extends Component {
    render() {
        return (
            <>
                <section className="partner-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="partner-title">
                            <h2>여러 기업과 함께합니다.</h2>
                        </div>

                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                576: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 5,
                                },
                                1200: {
                                    slidesPerView: 7,
                                },
                            }}
                            autoplay={{
                                delay: 6000,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Autoplay]} 
                            className="partner-slides"
                        > 
                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner1.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner2.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner3.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner4.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner5.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner6.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner7.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="#" target='_blank'>
                                        <img src="/images/partner/partner5.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </>
        );
    }
}

export default Partner;