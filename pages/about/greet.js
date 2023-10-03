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
import HeadMeta from 'components/HeadMeta';


import styles from "styles/custom/custom.module.css"

class Greet extends Component {
    render() {
        return (
            <>

                <HeadMeta 
                    title="인사말-사단법인 미래로"
                    description="사단법인 미래로의 인사말을 확인하세요."
                    url="https://miraero.org/about/greet"
                />

                <Navbar />

                <PageHeader title="사단법인 미래로 인사말" subtitle="메인화면" location="인사말"/>
                <div className={styles.greet_container}>
                    {/* <img src="/images/about/greet.png" alt="원장소개" style={{border:"5px solid black"}}/> */}
                    <p style={{
                        marginTop:"50px",
                        fontWeight:"600",
                        fontSize:"20px",
                        lineHeight:"1.6",
                        wordBreak:"keep-all"
                    }}
                    >
                       <strong>사단법인 미래로</strong>는 사회와 함께 성장하고 발전하기 위해 노력하고 있는 단체입니다.<br /> 우리의 목표는 사회적 변화와 발전을 촉진하며, 다양한 이해관계자들과 협력하여 더 나은 미래를 만드는 것입니다.
<br />
우리는 다음과 같은 가치를 중요하게 생각하며 활동하고 있습니다
<br />
<br />
<strong>공헌 :</strong> 사회에 봉사하고 도움을 주는 것을 최우선 가치로 삼습니다.<br />
<strong>협력 :</strong> 다양한 이해관계자와 협력하여 함께 더 큰 성과를 이루고자 합니다.<br />
<strong>혁신 :</strong> 새로운 아이디어와 방법을 추구하며 혁신적인 변화를 추진합니다.<br />
<br />
사단법인 미래로는 이러한 가치를 기반으로 다양한 프로젝트와 이니셔티브를 추진하며, 사회적 책임을 다하고자 합니다. 함께 노력하여 미래를 밝고 지속 가능한 방향으로 나아가기를 바랍니다.
<br />
<br />
감사합니다.
</p>
                </div>
                




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

export default Greet;