import React, { Component } from 'react';
import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';

import Footer from 'components/Layout/Footer';

import TeamContent from 'components/Team/TeamContent';

class Greet extends Component {
    render() {
        return (
            <>
                <Navbar />
          
                <PageHeader title="사단법인 미래로 강사진 소개" subtitle="메인화면" location="강사진 소개"/>
                
                <TeamContent />
                
                <Footer />
            </>
        );
    }
}

export default Greet;