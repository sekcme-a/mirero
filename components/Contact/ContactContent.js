import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <>
                <section className="contact-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">문의하기</span>
                                    <h2>아카데미에 대해 문의하세요</h2>
                                    <p>Your email address will not be published. We promise not to spam!</p>
                                </div>

                                <div className="contact-info">
                                    <ul className="contact-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-location"></i>
                                            </div>
                                            <span>주소</span>
                                            서울특별시 영등포구 버드나루로88, 101호
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-email"></i>
                                            </div>
                                            <span>Email</span>
                                            kyunsik@hanmail.net<br />
                                            {/* fax@email.com */}
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-volume"></i>
                                            </div>
                                            <span>Phone</span>
                                            010-5339-6943 <br />
                                            Fax.0504 411 0112
                                        </li>
                                    </ul>

                                    {/* <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">궁금하신 사항이 있나요?</span>
                                    <h2>궁금하신 내용에 대해 작성해주세요</h2>
                                    <p>빠른 시일 내에 답장해드리겠습니다.</p>
                                </div>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default ContactContent;