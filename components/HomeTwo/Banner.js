import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Banner = () => {
    const [toggler, setToggler] = useState(false);
    return (
		<>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/embed/bk7McNUjWgw',
                ] }
            />

			<div className="home-section">
                <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="home-slides"
                >
                    <SwiperSlide>
                        <div className="main-banner item-bg5">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <span className="sub-title">The Best Workspace in New York</span>
                                            <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                            <div className="btn-box">
                                                <Link legacyBehavior legacyBehavior href="#">
                                                    <a className="default-btn">
                                                        Book A Room <span></span>
                                                    </a>
                                                </Link>

                                                <div
                                                    className="optional-btn"
                                                    onClick={ () => setToggler(!toggler) }
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="main-banner item-bg3">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <span className="sub-title">The Best Workspace in New York</span>
                                            <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                            <div className="btn-box">
                                                <Link legacyBehavior legacyBehavior href="#">
                                                    <a className="default-btn">
                                                        Book A Room <span></span>
                                                    </a>
                                                </Link>

                                                <div
                                                    className="optional-btn"
                                                    onClick={ () => setToggler(!toggler) }
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="main-banner item-bg1">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <span className="sub-title">The Best Workspace in New York</span>
                                            <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                            <div className="btn-box">
                                                <Link legacyBehavior legacyBehavior href="#">
                                                    <a className="default-btn">
                                                        Book A Room <span></span>
                                                    </a>
                                                </Link>

                                                <div
                                                    className="optional-btn"
                                                    onClick={ () => setToggler(!toggler) }
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="banner-footer">
                    <div className="container-fluid p-0">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-5 col-md-12 p-0">
                                <div className="banner-video">
                                    <div
                                        className="video-btn"
                                        onClick={ () => setToggler(!toggler) }
                                    > 
                                        <i className="flaticon-play-button-1"></i>
                                    </div>
                                
                                    <span>Watch Video</span>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 p-0">
                                <div className="banner-contact-info">
                                    <ul>
                                        <li>
                                            <i className="flaticon-location"></i>
                                            <span>Office Address</span>
                                            27 Division St, New York, NY 10002, USA
                                        </li>

                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>Email Address</span>
                                            <a href="mailto:info@tuam.com">info@tuam.com</a>
                                            <a href="mailto:support@tuam.com">support@tuam.com</a>
                                        </li>

                                        <li>
                                            <i className="flaticon-calendar"></i>
                                            <span>Office Hour</span>
                                            Mon - Fri, 8 AM - 10 PM (Members are 24/7)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default Banner;