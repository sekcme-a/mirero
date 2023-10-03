import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <>
                <section className="about-area ptb-100" style={{paddingTop:"180px"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-title">
                                    <span>사단법인 미래로 소개</span>
                                    <h2>사단법인 미래로를 소개합니다.</h2>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-text">
                                    <p className='bold'>사단법인 미래로는 우리 사회 구성원 및 다양한 문화, 언어, 출신 국가를 가진 사람들을 지원하고 그들의 다양성을 존중하는 비영리 단체입니다. 사단법인 미래로는 사회적 통합, 문화 교류, 이해와 협력을 촉진하며, 우리 사회에서 모든 개인과 가족이 안정적이고 풍요로운 삶을 살 수 있도록 지원하는 것에 주력하고 있습니다.
                                    </p>

                                    <Link legacyBehavior  href="/about">
                                        <a className="read-more-btn">
                                            소개 자세히 보기 <i className="flaticon-next"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;