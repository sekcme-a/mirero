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

class About extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader title="리더스힐링아카데미 소개" subtitle="메인화면" location="기본소개"/>

                <AboutText />
                <WhyChooseUs />
                <div style={{marginBottom:"90px"}} />
                <ServicesSlider />





                {/* <OurMission />

                <OurTeamSlider />

                <JoinNow />

                <FeedbackSlider />

                <Partner /> */}
                
                <Footer />
            </>
        );
    }
}

export default About;