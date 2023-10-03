import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


const PARTNER_DATA = [
    {
        url:"http://www.seasondaily.net",
        img:"/images/partner/seasondaily.png",
    },
    {
        url:"https://www.kmcn.kr",
        img:"/images/partner/kmcn.png",
    },
    {
        url:"https://www.acrc.go.kr/",
        img:"/images/partner/acrc.png",
    },
    {
        url:"https://www.gg.go.kr/",
        img:"/images/partner/gg.png",
    },
]
class Partner extends Component {
    render() {
        return (
            <>
                <section className="partner-area ptb-100 bg-f8f8f8" style={{padding:"70px 0 "}}>
                    <div className="container">
                        {/* <div className="partner-title">
                            <h2>여러 기관과 함께합니다.</h2>
                        </div> */}

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
                                    slidesPerView: PARTNER_DATA.length-2,
                                },
                                768: {
                                    slidesPerView: PARTNER_DATA.length-1,
                                },
                                992: {
                                    slidesPerView: PARTNER_DATA.length,
                                },
                                1200: {
                                    slidesPerView: PARTNER_DATA.length,
                                },
                            }}
                            autoplay={{
                                delay: 6000,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Autoplay]} 
                            className="partner-slides"
                        > 
                            {PARTNER_DATA.map((item, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="single-partner-item">
                                            <a href={item.url} target='_blank'>
                                                <img src={item.img} alt="image" />
                                            </a> 
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                    </div>
                </section>
            </>
        );
    }
}

export default Partner;