import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import styles from "../../styles/custom/custom.module.css"

const Banner = () => {
    const [toggler, setToggler] = useState(false);
    const [toggler2, setToggler2] = useState(false)
    return (
		<>
            {/* <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/embed/Ogn8fOTtp6s',
                ] }
            />
            <FsLightbox
                toggler={ toggler2 }
                sources={ [
                    'https://www.youtube.com/embed/7GU0BkGY8Iw',
                ] }
            /> */}
 
            <Swiper 
                navigation={true} 
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Autoplay]} 
                className="home-area home-slides"
            >
                <SwiperSlide>
                    <div className="main-banner item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="miraero-mainBan-cont">
                                        <span className={`sub-title ${styles.banner_sub_title}`}>사단법인 미래로</span>
                                        <h1>미래로, 세계로</h1>

                                        <div className="btn-box">
                                            <Link legacyBehavior  href="/about">
                                                <a className="default-btn">사단법인 미래로 단체 소개<span></span></a>
                                            </Link>

                                            {/* <div
                                                className="optional-btn"
                                                onClick={ () => setToggler(!toggler) }
                                            > 
                                                <i className="flaticon-play-button"></i> 소개 영상 보기
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="main-banner item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="miraero-mainBan-cont">
                                        <span className={`sub-title ${styles.banner_sub_title}`}>사단법인 미래로</span>
                                        <h1>미래로, 세계로</h1>

                                        <div className="btn-box">
                                            <Link legacyBehavior  href="/business">
                                                <a className="default-btn">사업 소개<span></span></a>
                                            </Link>

                                            {/* <div
                                                className="optional-btn"
                                                onClick={ () => setToggler2(!toggler2) }
                                            > 
                                                <i className="flaticon-play-button"></i> 병원 소개 영상 보기
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className="main-banner item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="miraero-mainBan-cont">
                                        <span className="sub-title">The Best Workspace in New York</span>
                                        <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                        <div className="btn-box">
                                            <Link legacyBehavior  href="#">
                                                <a className="default-btn">Book A Room <span></span></a>
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
                </SwiperSlide> */}
            </Swiper>
		</>
    );
}

export default Banner;