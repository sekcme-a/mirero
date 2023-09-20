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
                                    <img src="/images/services/002.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link legacyBehavior  href="/about/introduce">
                                                <a>단체 소개</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link legacyBehavior  href="/about/introduce">
                                                <a>단체 소개</a>
                                            </Link>
                                        </h3>
                                        <p className={`${styles.servciesBoxes_p} bold` }>사단법인 미래로 단체를 소개합니다.</p>

                                        <Link legacyBehavior  href="/about/introduce">
                                            <a className="read-more-btn">자세히 보기</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-box">
                                    <img src="/images/services/001.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link legacyBehavior  href="/about/greet">
                                                <a>미래로 인사말</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link legacyBehavior  href="/about/greet">
                                                <a>미래로 인삿말</a>
                                            </Link>
                                        </h3>
                                        <p className={`${styles.servciesBoxes_p} bold` }>사단법인 미래로 소개와 인사말을 확인하세요.</p>

                                        <Link legacyBehavior  href="/about/greet">
                                            <a className="read-more-btn">자세히 보기</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-box">
                                    <img src="/images/services/003.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link legacyBehavior  href="/program/team">
                                                <a>조직도 소개</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link legacyBehavior  href="/about/team">
                                                <a>조직도 소개</a>
                                            </Link>
                                        </h3>
                                        <p className={`${styles.servciesBoxes_p} bold` }>사단법인 미래로의 조직도를 소개합니다.</p>

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