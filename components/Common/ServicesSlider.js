import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";
class ServicesSlider extends Component {
    render() {
        return (
            <>
                <section className="services-area pb-100">
                    <div className="container">
                        <Swiper
                            spaceBetween={30}
                            navigation={true}
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
                            modules={[Pagination, Navigation]}
                            className="services-slides"
                        >
                            <SwiperSlide>
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-university"></i>

                                        <div className="icon-bg">
                                            <img src="/images/icon-bg1.png" alt="image" />
                                            <img src="/images/icon-bg2.png" alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link legacyBehavior  href="/about/purpose">
                                            <a>설립목적</a>
                                        </Link>
                                    </h3>

                                    <p className='bold'>중앙대학교 광명병원과 함께하는 리더스 힐링 아카데미의 설립목적입니다.</p>

                                    <Link legacyBehavior  href="/about/purpose">
                                        <a className="read-more-btn">보러가기</a>
                                    </Link>

                                    <div className="box-shape">
                                        <img src="/images/box-shape1.png" alt="image" />
                                        <img src="/images/box-shape2.png" alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-layers"></i>

                                        <div className="icon-bg">
                                            <img src="/images/icon-bg1.png" alt="image" />
                                            <img src="/images/icon-bg2.png" alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link legacyBehavior  href="/about/purpose">
                                            <a>설립취지</a>
                                        </Link>
                                    </h3>

                                    <p className='bold'>중앙대학교 광명병원과 함께하는 리더스 힐링 아카데미의 설립취지를 알려드립니다.</p>

                                    <Link legacyBehavior  href="/about/purpose">
                                        <a className="read-more-btn">보러가기</a>
                                    </Link>

                                    <div className="box-shape">
                                        <img src="/images/box-shape1.png" alt="image" />
                                        <img src="/images/box-shape2.png" alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* <SwiperSlide>
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-room"></i>

                                        <div className="icon-bg">
                                            <img src="/images/icon-bg1.png" alt="image" />
                                            <img src="/images/icon-bg2.png" alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link legacyBehavior  href="/service-details">
                                            <a>Conference Rooms</a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                                    <Link legacyBehavior  href="/service-details">
                                        <a className="read-more-btn">Learn More</a>
                                    </Link>

                                    <div className="box-shape">
                                        <img src="/images/box-shape1.png" alt="image" />
                                        <img src="/images/box-shape2.png" alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide> */}

                            <SwiperSlide>
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-location"></i>

                                        <div className="icon-bg">
                                            <img src="/images/icon-bg1.png" alt="image" />
                                            <img src="/images/icon-bg2.png" alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link legacyBehavior  href="/about/location">
                                            <a>오시는 길</a>
                                        </Link>
                                    </h3>

                                    <p className='bold'>중앙대학교 광명병원으로 오시는 길 입니다.<br/>&nbsp;</p>

                                    <Link legacyBehavior  href="/about/location">
                                        <a className="read-more-btn">보러가기</a>
                                    </Link>

                                    <div className="box-shape">
                                        <img src="/images/box-shape1.png" alt="image" />
                                        <img src="/images/box-shape2.png" alt="image" />
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

export default ServicesSlider;