import React, { Component } from 'react';
import Link from 'next/link';
import styles from "../../styles/custom/custom.module.css"

class ServicesBoxes extends Component {
    render() {
        return (
            <>
                <section className="services-boxes-area">
                    <div className="container">
                        <div className="row justify-content-center">


                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-box">
                                    <img src="/images/services/services2.png" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link legacyBehavior  href="/program/schedule">
                                                <a>교육 프로그램</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link legacyBehavior  href="/program/schedule">
                                                <a>교육 프로그램</a>
                                            </Link>
                                        </h3>
                                        <p className={`${styles.servciesBoxes_p} bold` }>최고의 의료시설과 의료진으로 구성된 리더스 힐링 아카데미의 프로그램을 확인하세요.</p>

                                        <Link legacyBehavior  href="/program/schedule">
                                            <a className="read-more-btn">자세히 보기</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-box">
                                    <img src="/images/services/services1.png" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link legacyBehavior  href="/about/greet">
                                                <a>원장 소개 및 인사말</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link legacyBehavior  href="/about/greet">
                                                <a>원장 소개 및 인삿말</a>
                                            </Link>
                                        </h3>
                                        <p className={`${styles.servciesBoxes_p} bold` }>리더스 힐링 아카데미의 원장 소개와 인삿말을 확인하세요.</p>

                                        <Link legacyBehavior  href="/about/greet">
                                            <a className="read-more-btn">자세히 보기</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-box">
                                    <img src="/images/services/services3.png" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link legacyBehavior  href="/program/team">
                                                <a>강사진 소개</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link legacyBehavior  href="/program/team">
                                                <a>강사진 소개</a>
                                            </Link>
                                        </h3>
                                        <p className={`${styles.servciesBoxes_p} bold` }>리더스 힐링 아카데미와 함께하는 중앙대학교 광명병원의 의료진을 소개합니다.</p>

                                        <Link legacyBehavior  href="/program/team">
                                            <a className="read-more-btn">자세히 보기</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ServicesBoxes;