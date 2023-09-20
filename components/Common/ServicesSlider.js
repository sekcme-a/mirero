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
                                        <Link legacyBehavior  href="/business/introduce">
                                            <a>사업 소개</a>
                                        </Link>
                                    </h3>

                                    <p className='bold'>다문화 기자단, 동아리지원사업 등 사단법인 미래로의 사업을 소개합니다. </p>

                                    <Link legacyBehavior  href="/business/introduce">
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
                                        <i className="flaticon-check-mark"></i>

                                        <div className="icon-bg">
                                            <img src="/images/icon-bg1.png" alt="image" />
                                            <img src="/images/icon-bg2.png" alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link legacyBehavior  href="/announcement">
                                            <a>공지사항</a>
                                        </Link>
                                    </h3>

                                    <p className='bold'>사단법인 미래로의 공지사항으로 최근 소식들을 확인하세요!</p>

                                    <Link legacyBehavior  href="/announcement">
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
                                        <i className="flaticon-award"></i>

                                        <div className="icon-bg">
                                            <img src="/images/icon-bg1.png" alt="image" />
                                            <img src="/images/icon-bg2.png" alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link legacyBehavior  href="/support/main">
                                            <a>후원 신청</a>
                                        </Link>
                                    </h3>

                                    <p className='bold'>사단법인 미래로에 후원신청을 하실 수 있습니다!<br/>&nbsp;</p>

                                    <Link legacyBehavior  href="/support/main">
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