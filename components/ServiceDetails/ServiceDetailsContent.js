import React, { Component } from 'react';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">


                                <h3>설립목적</h3>
                                <p className='bold'>어려운 이웃에 대한 봉사와 나눔을 통해 어려운 환경속에서 꿈과 희망을 잃지 않고 살아갈 수 있게 도와주고 자원봉사문화 활성화 등 시민의식 고취 활동을 통하여 쾌적하고 안전한 주거 환경을 조성하여 지역 주민 모두가 더불어 행복하게 살아가는 지역 공동체를 형성함을 그 목적으로 함.</p>

                                <div style={{marginBottom:"30px"}}/>
                                <h3>설립연월</h3>
                                <p className='bold'>{`2023년 8월 (제2023-01-56호)`} </p>

                                <div style={{marginBottom:"30px"}}/>
                                <h3>슬로건</h3>
                                <div className="features-text">
                                    <h4>
                                        <i className="flaticon-check-mark"></i> 공헌
                                        <i className="flaticon-check-mark" style={{marginLeft:"40px"}}></i> 협력
                                        <i className="flaticon-check-mark" style={{marginLeft:"40px"}}></i> 혁신</h4>
                                </div>
                            </div>

                            <div className="services-details-image">
                                <img src="/images/about/purpose.jpg" alt="image" />
                            </div>
                        </div>

                        
                    </div>
                </section>
            </>
        );
    }
}

export default ServiceDetailsContent;