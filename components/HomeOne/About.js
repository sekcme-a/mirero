import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-title">
                                    <span>리더스 힐링 아카데미 소개</span>
                                    <h2>건강과 행복을 위한 국내 최고의 사회교육과정을 소개합니다</h2>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-text">
                                    <p className='bold'>급변하는 대한민국의 주인공 귀하께서는 사회적 리더로서 정상에 오른만큼 권한과 책임이 동반되는 위치에 도달하셨습니다. 이제는 완벽한 유지관리로 더 나은 미래를 준비해야 될 때입니다.
                                        그 중대한 시점에 건강과 행복을 위한 국내 최고의 사회교육과정을 소개합니다.
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