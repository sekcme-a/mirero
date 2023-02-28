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
import VideoArea2 from 'components/Common/VideoArea2';

class Greet extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader title="리더스 힐링 아카데미 소개영상" subtitle="메인화면" location="소개영상"/>
                
                <VideoArea2 urlList={ [
                    'https://www.youtube.com/embed/Ogn8fOTtp6s',
                ]} title="리더스 힐링 캠프를 소개합니다" subtitle="중앙대학교 광명병원 최고의 의료시설과 의료진와 함께하는 건강과 행복을 위한 국내 최고의 사회교육과정, 리더스 힐링 캠프를 소개 영상입니다."/>


                <VideoArea2 urlList={ [
                    'https://www.youtube.com/embed/7GU0BkGY8Iw',
                ]} title="중앙대학교 광명병원을 소개합니다" subtitle={`"우리의 중앙은 당신입니다." 중앙대학교 광명병원 소개영상입니다.`}/>
                
                <Footer />
            </>
        );
    }
}

export default Greet;