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
                                    <div className="logo">
                                        <Link legacyBehavior  href="/">
                                            <a>
                                                <img src="/images/logo-white.png" alt="image" />
                                            </a>
                                        </Link>

                                        <p className="keep-all bold">급변하는 대한민국의 주인공 귀하께서는 사회적 리더로서 정상에 오른만큼 권한과 책임이 동반되는 위치에 도달하셨습니다. 이제는 완벽한 유지관리로 더 나은 미래를 준비해야 될 때입니다. 그 중대한 시점에 건강과 행복을 위한 국내 최고의 사회교육과정을 소개합니다.</p>
                                    </div>

                                    {/* <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="flaticon-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="flaticon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="flaticon-instagram"></i>
                                            </a>
                                        </li>
                                    </ul> */}
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
                                                <a>기본소개</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/about/video">
                                                <a>소개영상</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/special">
                                                <a>특전</a>
                                            </Link>
                                        </li>
                                    
                                        <li>
                                            <Link legacyBehavior  href="/contact">
                                                <a>문의하기</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li><span>위치:</span>서울특별시 영등포구 버드나루로88, 101호</li>
                                        <li><span>이메일:</span> <a href="mailto:kyunsik@hanmail.net">kyunsik@hanmail.net </a></li>
                                        <li><span>전화번호:</span> <a href="tel:010-5339-6943">010-5339-6943</a></li>
                                        <li><span>Fax:</span> <a>0504 411 0112</a></li>
                                        <li><a href="https://map.naver.com/v5/search/%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%EB%B2%84%EB%93%9C%EB%82%98%EB%A3%A8%EB%A1%9C88%EC%9D%B8%EB%94%B0%EB%A5%B4%EC%8B%9C%EC%95%84%EB%B9%8C%EB%94%A9/place/1106183029?c=15,0,0,0,dh&isCorrectAnswer=true" target="_blank">네이버 지도에서 위치 확인</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p className='bold'><i className="far fa-copyright "></i> 리더스 힐링 아카데미</p>
                                </div>

                                {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link legacyBehavior  href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;