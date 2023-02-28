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

import styles from "styles/custom/custom.module.css"

class Greet extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader title="원장 소개 및 인사말" subtitle="메인화면" location="인사말"/>
                <div className={styles.greet_container}>
                    <img src="/images/about/greet.png" alt="원장소개" style={{border:"5px solid black"}}/>
                    <p style={{
                        marginTop:"50px",
                        fontWeight:"600",
                        fontSize:"20px",
                        lineHeight:"1.6",
                        wordBreak:"keep-all"
                    }}
                    >
                        대한민국 최고 VIP 의료특강 과정에 오신 걸 환영합니다.<br/><br/>
리더스 힐링 아카데미는 “건강한 생명연장의 꿈“을 목표로 세상에서 가장 소중한
여러분의 건강을 보다 안전하게 유지 관리하기 위해 현실적이고 과학적인 예방법을 안내하는
선진국 의료문화의 실천입니다.<br/><br/>
이제 병원은 아파서 치료하는 곳이 아니라 아프기 전에 진료하는 사전예방의 필요성을
구체적으로 실천함으로서 초기에 의료비용을 절감하는 건강지킴이 역할을 할 것입니다.
그 중심에 중앙대학교 광명병원이 앞장 설 것이며 리더스 힐링 아카데미가 실무를 맡아
여러분이 건강을 보다 효율적으로 관리하는 가이드 역할을 할 것입니다.<br/><br/>
누구든 평소 건강의 소중함을 알면서 바쁘고 중요한일에 밀려 소홀히 하지만
문제가 발생하면 모든 통증이나 비용은 사회적 VIP에서 환자로 바뀐 당사자의 몫입니다.<br/><br/>
과학은 발달하지만 사람의 노화는 멈추지 않듯이 현재 주어진 환경을 지키는 가장 탁월한
선택은 주치 의료기관을 정하여 정기적으로 건강을 관리하는 것이 가장 중요합니다.<br/><br/>
이제 19주간의 의료특강을 통해 지금까지 지켜온 여러분의 소중한 건강을 보다 확실하고
안전하게 지키는 계기가 되길 바랍니다.<br/><br/>
리더스 힐링 아카데미는 국내 최고수준의 의료특강을 통해 범람하는 의료지식의 오인을 바로잡고 진료 항목별 전문의 들이 직접 치료 경험에서 얻은 인체의 신비를 전달 할 것입니다.<br/><br/>
아울러 함께 참여하는 원우들의 구성도 상류층의 품격을 공감할 수 있는 분들로 모셨습니다.<br/><br/>
곧 시작되는 중앙대학교 광명병원이 첫 1기 출발에 함께 하시면 가장 럭셔리한 클럽으로
새로운 인맥을 형성하는 주인공이 되실 것입니다.<br/> 감사합니다.<br/><br/>
리더스 힐링 아카데미 원장 <strong>김균식</strong>
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