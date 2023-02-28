import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HomeOne/Banner';
import ServicesBoxes from '../components/HomeOne/ServicesBoxes';
import About from '../components/HomeOne/About';
import ServicesSlider from '../components/Common/ServicesSlider';
import Partner from '../components/Common/Partner';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import PriceTable from '../components/Pricing/PriceTable';
import JoinNow from '../components/Common/JoinNow';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import OurMission from '../components/Common/OurMission';
import OurTeamSlider from '../components/Common/OurTeamSlider';
import OurPlace from '../components/Common/OurPlace';
import OurBlog from '../components/Common/OurBlog';
import Footer from '../components/Layout/Footer';
import VideoArea from '../components/Common/VideoArea';
 
class Index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <ServicesBoxes />   

                <About />

                <ServicesSlider />

                <VideoArea />

                

                <WhyChooseUs />

                {/* <PriceTable /> */}
                {/* <OurTeamSlider /> */}
                <Partner />

                <JoinNow />

                {/* <FeedbackSlider /> */}

                {/* <OurMission /> */}

                

                {/* <OurPlace /> */}

                <OurBlog />
                
                <Footer />
            </>
        );
    }
}

export default Index;