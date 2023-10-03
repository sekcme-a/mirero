

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const [clickCount, setClickCount] = useState(0);
    const router = useRouter()

    const onCopyrightClick = () => {
        setClickCount(prevClickCount => prevClickCount+1)
        if(clickCount>=5){
            router.push("https://miraero-admin.netlify.app")
        }
        setTimeout(()=>{
            setClickCount(0)
        },3000)
    }

    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3 style={{ color: "white" }}>ABOUT US</h3>
                                <p style={{ color: "white", fontWeight: "normal" }}>사단법인 미래로</p>
                                <p style={{ color: "white", fontWeight: "bold", marginBottom: '0px' }}>등록번호</p>
                                <p style={{ color: "white", fontWeight: "normal" }}>제2023-01-56호</p>
                                <p style={{ color: "white", fontWeight: "bold", marginBottom: "0" }}>이사장</p>
                                <p style={{ color: "white", fontWeight: "normal" }}>소해련</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>
                                <ul className="footer-quick-links">
                                    <li>
                                        <Link legacyBehavior href="/about">
                                            <a>사업실적</a>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link legacyBehavior  href="/">
                                            <a></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior  href="/about/greet">
                                            <a>사업계획</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior  href="/">
                                            <a></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior  href="/article/announcement">
                                            <a>공지사항</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior  href="/">
                                            <a></a>
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
                                    <p style={{ color: "white", marginTop: '30px', marginBottom: "10px", fontWeight: "bold" }}>연락처</p>
                                    <li><span>TEL:</span> <a href="tel:031-406-1170">031-406-1170</a></li>
                                    <li><span>FAX:</span> <a href="tel:0504-200-0501">0504-200-0501</a></li>
                                    <li><span>Email:</span> <a href="mailto:sdjebo@naver.com">cmiraero@naver.com</a></li>
                                    {/* Add other contact information */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6 col-md-6">
                                <p className='bold'><i className="far fa-copyright" onClick={onCopyrightClick}></i> 사단법인 미래로</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
