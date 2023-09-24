import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        {/* <div className="subscribe-area">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="subscribe-content">
                                        <h2>Join Our Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div className="subscribe-form">
                                        <form className="newsletter-form">
                                            <input type="email" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" />
                                            <button type="submit">
                                                Subscribe Now <i className="flaticon-right-chevron"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3 style={{color:"white", }}>ABOUT US</h3>
                                    <p style={{color:"white", fontWeight:"normal"}}>사단법인 미래로</p>
                                    <h5 style={{color:"white", }}>등록번호</h5>
                                    <p style={{color:"white", fontWeight:"normal"}}>제2023-01-56호</p>
                                    <h5 style={{color:"white", }}>이사장</h5>
                                    <p style={{color:"white", fontWeight:"normal"}}>소해련</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link legacyBehavior  href="/">
                                                <a>메인화면</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/about">
                                                <a>사업실적</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/about/greet">
                                                <a>사업계획</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/announcement">
                                                <a>공지사항</a>
                                            </Link>
                                        </li>
                                    
                                        <li>
                                            <Link legacyBehavior  href="/support">
                                                <a>후원신청</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>CUSTOMER CENTER</h3>

                                    <ul className="footer-contact-info">
                                        <li><span>위치:</span> 경기도 수원시 영통구 동수원로 539-17, 2층</li>
                                        <h5 style={{color:"white", marginTop:'30px', fontWeight:"bold"}}>연락처</h5>
                                        <li><span>TEL:</span> <a href="tel:010-1234-5678">031-267-1234</a></li>
                                        <li><span>Email:</span> <a href="mailto:sdjebo@naver.com">sdjebo@naver.com</a></li>
                                        {/* <li><a href="https://map.naver.com/v5/search/%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%EB%B2%84%EB%93%9C%EB%82%98%EB%A3%A8%EB%A1%9C88%EC%9D%B8%EB%94%B0%EB%A5%B4%EC%8B%9C%EC%95%84%EB%B9%8C%EB%94%A9/place/1106183029?c=15,0,0,0,dh&isCorrectAnswer=true" target="_blank">네이버 지도에서 위치 확인</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p className='bold'><i className="far fa-copyright "></i> 사단법인 미래로</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;