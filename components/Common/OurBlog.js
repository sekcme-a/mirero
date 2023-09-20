import React, { Component } from 'react';
import Link from 'next/link';

class OurBlog extends Component {
    render() {
        return (
            <>
                <section className="blog-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Leaders Healing Academy</span>
                            <h2>사단법인 미래로 소식</h2>
                            <p>리더스 힐리 아카데미의 최근 소식을 확인하세요.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link legacyBehavior  href="/news-details">
                                            <a>
                                                <img src="/images/blog/blog1.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <div className="date">
                                            <i className="flaticon-calendar"></i> Oct 14, 2019
                                        </div>
                                    </div>

                                    <div className="post-content">
                                        <h3>
                                            <Link legacyBehavior  href="/news-details">
                                                <a>Why Business Absolutely Needs a Virtual Office</a>
                                            </Link>
                                        </h3>
                                        <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                        <Link legacyBehavior  href="/news-details">
                                            <a className="default-btn">Read More <span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link legacyBehavior  href="/news-details">
                                            <a>
                                                <img src="/images/blog/blog2.jpg" alt="image" />
                                            </a>
                                        </Link>

                                        <div className="date">
                                            <i className="flaticon-calendar"></i> Oct 10, 2019
                                        </div>
                                    </div>

                                    <div className="post-content">
                                        <h3>
                                            <Link legacyBehavior  href="/news-details#">
                                                <a>6 Design Trends to Look For in Coworking Spaces</a>
                                            </Link>
                                        </h3>
                                        <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                        <Link legacyBehavior  href="/news-details">
                                            <a className="default-btn">Read More <span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link legacyBehavior  href="/news-details">
                                            <a>
                                                <img src="/images/blog/blog3.jpg" alt="image" />
                                            </a>
                                        </Link>

                                        <div className="date">
                                            <i className="flaticon-calendar"></i> Sep 13, 2019
                                        </div>
                                    </div>

                                    <div className="post-content">
                                        <h3>
                                            <Link legacyBehavior  href="/news-details">
                                                <a>5 Ways to Work Remotely Without Being Overlooked</a>
                                            </Link>
                                        </h3>
                                        <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                        <Link legacyBehavior  href="/news-details">
                                            <a className="default-btn">Read More <span></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="blog-notes">
                                    <p>Insights to help you do what you do better, faster and more profitably. <Link legacyBehavior  href="#"><a>Read Full Blog</a></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurBlog;