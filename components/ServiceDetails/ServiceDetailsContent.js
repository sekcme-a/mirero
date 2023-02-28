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
                                <p className='bold'>본 사회교육과정은 인류의 염원인 생명연장의 꿈을 평소 실천에 옮김으로서 
                                치료보다 진료를 중시하는 선진 의료문화의 모범이 되어 
                                향후 국민건강에 이바지 하고자 함.</p>

                                <div style={{marginBottom:"30px"}}/>
                                <h3>설립취지</h3>
                                <p className='bold'>상기 목적달성의 부가적인 취지는 
                                    중앙대 광명병원의 인적 인프라형성에 사회전반의 CEO와 공감대를 형성하여 
                                    인지도향상과 병원의 장점을 알리는 
                                    홍보를 더하기 위함입니다. </p>

                                <div style={{marginBottom:"30px"}}/>
                                <h3>슬로건</h3>
                                <div className="features-text">
                                    <h4>
                                        <i className="flaticon-check-mark"></i> 긍정
                                        <i className="flaticon-check-mark" style={{marginLeft:"40px"}}></i> 열정
                                        <i className="flaticon-check-mark" style={{marginLeft:"40px"}}></i> 배려</h4>
                                </div>
                            </div>

                            <div className="services-details-image">
                                <img src="/images/hospital.png" alt="image" />
                            </div>
                        </div>

                        
                    </div>
                </section>
            </>
        );
    }
}

export default ServiceDetailsContent;