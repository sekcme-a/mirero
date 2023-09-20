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
import EventContent from 'components/Events/EventContent';

import styles from "styles/custom/custom.module.css"

class Greet extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader title="사단법인 미래로 프로그램" subtitle="메인화면" location="프로그램 소개"/>
                
                <EventContent />
                
                <Footer />
            </>
        );
    }
}

export default Greet;