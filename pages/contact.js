import React, { Component } from 'react';
import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';
import ContactContent from 'components/Contact/ContactContent';
import Footer from 'components/Layout/Footer';
import HeadMeta from 'components/HeadMeta';

class Contact extends Component {
    render() {
        return (
            <>
              <HeadMeta 
                title="문의하기-사단법인 미래로"
                description="사단법인 미래로에 문의하세요. 궁금하신 내용에 대해 빠르게 답변해드리겠습니다."
                url="https://miraero.org/contact"
              />

                <Navbar />

                <PageHeader title="문의하기" subtitle="메인화면" location="문의하기"/>

                <ContactContent />
                
                <Footer />
            </>
        );
    }
}

export default Contact;