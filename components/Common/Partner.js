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
                                    <a href="https://gh.cauhs.or.kr/home/" target='_blank'>
                                        <img src="/images/partner/001.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="https://xn--vk1by6xrzecngs4l6obxj.com/" target='_blank'>
                                        <img src="/images/partner/002.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="https://www.kmaeil.com/" target='_blank'>
                                        <img src="/images/partner/003.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="http://www.westnews.co.kr/" target='_blank'>
                                        <img src="/images/partner/004.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="http://asinews.co.kr/" target='_blank'>
                                        <img src="/images/partner/005.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="http://www.shinews.co.kr/" target='_blank'>
                                        <img src="/images/partner/006.png" alt="image" />
                                    </a> 
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-partner-item">
                                    <a href="https://gh.cauhs.or.kr/home/" target='_blank'>
                                        <img src="/images/partner/001.png" alt="image" />
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