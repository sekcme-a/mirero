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
                                    <span>사단법인 미래로 소개</span>
                                    <h2>소개문구_제목</h2>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-text">
                                    <p className='bold'>소개문구_내용 소개문구_내용소개문구_내용 소개문구_내용 소개문구_내용 소개문구_내용 소개문구_내용 소개문구_내용소개문구_내용 소개문구_내용 소개문구_내용
                                    </p>

                                    <Link legacyBehavior  href="/about/introduce">
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