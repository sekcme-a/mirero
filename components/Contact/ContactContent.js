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
                                <img src="/images/contact/contact_bg.jpeg" alt="문의하기"/>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">궁금하신 사항이 있나요?</span>
                                    <h2 style={{fontSize:"30px"}}>궁금하신 내용에 대해 작성해주세요</h2>
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