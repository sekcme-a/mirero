import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
class OurPlace extends Component {
    render() {
        return (
            <>
                <section className="place-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="place-content">
                                    <span className="sub-title">Our Place</span>
                                    <h2>Building & Area</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <ul className="features-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-parking"></i>
                                            </div>
                                            <span>Parking Area</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-breakfast"></i>
                                            </div>
                                            <span>Restaurants</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-shop"></i>
                                            </div>
                                            <span>Supermarket</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <Swiper
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 6000,
                                        pauseOnMouseEnter: true,
                                    }}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    className="place-image-slides"
                                >
                                    <SwiperSlide>
                                        <div className="single-place-image bg1">
                                            <img src="/images/place-img1.jpg" alt="image" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="single-place-image bg2">
                                            <img src="/images/place-img2.jpg" alt="image" />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="single-place-image bg3">
                                            <img src="/images/place-img3.jpg" alt="image" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper> 
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurPlace;