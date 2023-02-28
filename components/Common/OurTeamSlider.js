import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

class OurTeamSlider extends Component {
    render() {
        return (
            <>
                <section className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>Meet Our Experts</h2>
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
                            className="team-slides"
                        > 
                            <SwiperSlide>
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team/team2.jpg" alt="image" />

                                        <ul className="social">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content">
                                        <h3>Lee Munroe</h3>
                                        <span>Lead Designer</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team/team3.jpg" alt="image" />

                                        <ul className="social">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content">
                                        <h3>Calvin Klein</h3>
                                        <span>Lead Developer</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team/team4.jpg" alt="image" />

                                        <ul className="social">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content">
                                        <h3>Sarah Taylor</h3>
                                        <span>Lead Architecure</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team/team1.jpg" alt="image" />

                                        <ul className="social">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content">
                                        <h3>Alastair Cook</h3>
                                        <span>Marketing Manager</span>
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

export default OurTeamSlider;