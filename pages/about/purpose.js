import React, { Component } from 'react';
import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';
import AboutText from 'components/About/AboutText';
import ServicesSlider from 'components/Common/ServicesSlider';
import OurMission from 'components/Common/OurMission';
import OurTeamSlider from 'components/Common/OurTeamSlider';
import JoinNow from 'components/Common/JoinNow';
import FeedbackSlider from 'components/Common/FeedbackSlider';
import Partner from 'components/Common/Partner';
import Footer from 'components/Layout/Footer';
import WhyChooseUs from 'components/HomeOne/WhyChooseUs';
import ServiceDetailsContent from 'components/ServiceDetails/ServiceDetailsContent';

import styles from "styles/custom/custom.module.css"

class Greet extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader title="아카데미 설립 목적 및 취지" subtitle="메인화면" location="설립목적 및 취지"/>
                
                <ServiceDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default Greet;