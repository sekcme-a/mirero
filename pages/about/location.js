import React, { useEffect, useState } from 'react';
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

import Map from "components/About/Map"


const Location = () => {

        return (
            <>
                <Navbar />

                <PageHeader title="오시는 길" subtitle="메인화면" location="오시는 길"/>
                
                <Map locX="126.9272" locY="37.5170"/>
                
                <Footer />
            </>
        );
}

export default Location;