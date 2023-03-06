import React, { Component } from 'react';
import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';
import ContactContent from 'components/Contact/ContactContent';
import Footer from 'components/Layout/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader title="문의하기" subtitle="메인화면" location="문의하기"/>

                <ContactContent />
                
                <Footer />
            </>
        );
    }
}

export default Contact;