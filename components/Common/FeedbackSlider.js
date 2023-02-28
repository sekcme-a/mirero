import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
class FeedbackSlider extends Component {
    render() {
        return (
            <>
                <div className="feedback-area ptb-100">
                    <div className="container">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation]}
                            className="feedback-slides"
                        >
                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices gravida.</p>

                                    <div className="client">
                                        <img src="/images/partner/partner1.png" alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <p>Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                    <div className="client">
                                        <img src="/images/partner/partner2.png" alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna, lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.</p>

                                    <div className="client">
                                        <img src="/images/partner/partner3.png" alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper> 
                    </div>
                </div>
            </>
        );
    }
}

export default FeedbackSlider;