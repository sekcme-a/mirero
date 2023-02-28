import React, { Component } from 'react';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

class WhyChooseUs extends Component {
    render() {
        return (
            <>
                <section className="why-choose-us-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="why-choose-us-image">
                                    <img src="/images/hospital.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="why-choose-us-content">
                                    <div className="content">
                                        <span className="sub-title">Your Benefits</span>
                                        <h2>리더스 힐링 캠프</h2>
                                        <p>리더스 힐링 아카데미는 건강한 생명 연장을 목표로하는 의료 교육 프로그램이며, 중앙대학교 광명병원이 협력하여 최고 수준의 의료 교육을 제공합니다.</p>

                                        <ul className="features-list">
                                            <li>
                                                <div className="icon">
                                                    {/* <i className="flaticon-layers"></i> */}
                                                    <FlagOutlinedIcon style={{marginTop:"-5px", marginLeft:"2px"}} fontSize="medium"/>
                                                </div>
                                                <span>선진국 의료문화 적용 목표</span>
                                                리더스 힐링 캠프는 현실적이고 과학적인 예방법을 안내하는 선진국 의료문화의 실천을 목표로 합니다.
                                            </li>

                                            <li>
                                                <div className="icon">  
                                                    {/* <i className="flaticon-security"></i> */}
                                                    <PriceCheckOutlinedIcon style={{marginTop:"-5px", marginLeft:"2px"}} fontSize="medium"/>
                                                </div>
                                                <span>사전예방으로 초기 의료비 절감</span>
                                                아프기 전에 진료하는 사전예방의 필요성을 강조하며 초기에 의료비용을 절감하는 건강지킴이 역할을 해드립니다.
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    {/* <i className="flaticon-wifi"></i> */}
                                                    <InfoOutlinedIcon style={{marginTop:"-5px", marginLeft:"2px"}} fontSize="medium"/>
                                                </div>
                                                <span>중앙대 광명병원 중심 실무 가이드</span>
                                                중앙대학교 광명병원 중심에서 리더스 힐링 아카데미가 실무를 맡아 건강을 보다 효율적으로 관리하는 가이드 역할을 해드립니다.
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    {/* <i className="flaticon-location"></i> */}
                                                    <CoPresentOutlinedIcon style={{marginTop:"-5px", marginLeft:"2px"}} fontSize="medium"/>
                                                </div>
                                                <span>실무 전문의들의 의료 지식 전달</span>
                                                범람하는 의료지식의 오인을 바로잡고 진료 항목별 전문의들이 직접 치료 경험에서 얻은 인체의 신비를 전달합니다.
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    {/* <i className="flaticon-taxi"></i> */}
                                                    <DeviceHubOutlinedIcon style={{marginTop:"-5px", marginLeft:"2px"}} fontSize="medium"/>
                                                </div>
                                                <span>상류층과 함께하는 참여 기회</span>
                                                상류층의 품격을 공감할 수 있는 분들로 구성된 원우들과 함께 참여합니다.
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    {/* <i className="flaticon-calendar"></i> */}
                                                    <Groups2OutlinedIcon style={{marginTop:"-5px", marginLeft:"2px"}} fontSize="medium"/>
                                                </div>
                                                <span>럭셔리 클럽 가입 기회</span>
                                                가장 럭셔리한 클럽으로 새로운 인맥을 형성하는 주인공이 될 수 있습니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUs;


// 위 문장에서 말하는 리더스 힐링 아카데미의 장점 6가지는 다음과 같습니다:

// 현실적이고 과학적인 예방법을 안내하는 선진국 의료문화의 실천을 목표로 한다는 점.
// 아프기 전에 진료하는 사전예방의 필요성을 강조하며 초기에 의료비용을 절감하는 건강지킴이 역할을 한다는 점.
// 중앙대학교 광명병원이 중심에 설 것이며 리더스 힐링 아카데미가 실무를 맡아 건강을 보다 효율적으로 관리하는 가이드 역할을 한다는 점.
// 범람하는 의료지식의 오인을 바로잡고 진료 항목별 전문의들이 직접 치료 경험에서 얻은 인체의 신비를 전달한다는 점.
// 상류층의 품격을 공감할 수 있는 분들로 구성된 원우들과 함께 참여한다는 점.
// 출발하는 첫 1기에 함께하면 가장 럭셔리한 클럽으로 새로운 인맥을 형성하는 주인공이 될 수 있다는 점.

// 이 6가지 장점들은 각자 2~5단어로 요약해줘



// 선진국 의료문화 적용 목표
// 사전예방으로 초기 의료비 절감
// 중앙대 광명병원 중심 실무 가이드
// 직접 경험한 전문의들의 인체 지식 전달
// 상류층과 함께하는 참여 기회
// 1기 참여시 럭셔리 클럽 가입 기회