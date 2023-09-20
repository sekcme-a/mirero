import React, { Component } from 'react';
import Link from 'next/link';
import styles from "styles/custom/custom.module.css"
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
class AboutUs extends Component {

    
    render() {
        function downloadFile(url, filename) {
            fetch(url)
              .then((response) => response.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement("a");
                a.href = url;
                a.setAttribute("download", filename);
                document.body.appendChild(a);
                a.click();
                a.remove();
              });
          }

        return (
            <>
                <section className="about-section ptb-100">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className={`col-lg-6 col-md-12 ${styles.special_container}`}>
                                <div className="about-image">
                                    <div className="img1">
                                        <img src="/images/about/about1.jpg" alt="image" />
                                    </div>

                                    <div className="img2">
                                        <img src="/images/about/about2.jpg" alt="image" />
                                    </div>

                                    <div className="img3">
                                        <img src="/images/hospital.png" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">특전</span>
                                    <h2>사단법인 미래로 원우분들을 위한 특전</h2>
                                    <p className='bold'>완벽한 유지관리로 더 나은 미래를 준비할 수 있도록 사단법인 미래로 원우분들께는 여러 가지 특전이 제공됩니다.<br />
                                    이 특전은 참여한 모든 분들에게 주어지며, 참여를 통해 얻은 노력과 열정에 보답하고자 마련되었습니다.<br />
                                    사단법인 미래로에서 참여한 모든 원우 분들께, 우수한 건강관리와 예방의 중요성을 인식하고 실천하실 수 있는 기회를 제공합니다. 이를 위해, 중앙대학교 광명병원의 여러 건강검진 프로그램에서 50%의 특별 할인 혜택을 제공하고 있습니다.<br />
                                        {/* 원우분들께는 중앙대학교 광명병원의 여러 건강검진 프로그램에 50%의 할인이 적용됩니다. 또한, 아카데미의 전문가들이 진행하는 워크숍에 무료로 참여할 수 있으며, 이를 통해 자신의 실력을 더욱 향상시킬 수 있습니다. 또한, 참여자분들께는 아카데미에서 만난 다른 전문가나 의료진들과 네트워킹할 수 있는 기회가 주어집니다. 이러한 특전들을 통해 참여자분들께서는 더욱 전문적이고 발전된 의료 서비스를 제공할 수 있을 것입니다.</p> */}
                                    </p>
                                    <ul className="features-list">
                                        <li>
                                            <div className="icon">
                                                {/* <i className="flaticon-work"></i> */}
                                                <LoyaltyOutlinedIcon fontSize='30px'/>
                                            </div>
                                            <span>건강검진 할인</span>
                                            중앙대학교 광명병원의 여러 건강검진에서 50% 할인이 적용됩니다.
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <SensorOccupiedOutlinedIcon fontSize='30px' />
                                            </div>
                                            <span>의료진 네트워크</span>
                                            아카데미에서 만난 의료진들과 네트워킹할 수 있는 기회가 주어집니다.
                                        </li>
                                    </ul>
                                    
                                    <p className='bold'>이러한 건강검진 프로그램은 최신의 의학 기술과 장비를 활용하여, 참여자들의 건강상태를 종합적으로 점검하고 질병 예방과 조기 발견에 기여하는 프로그램입니다.<br />

사단법인 미래로에서의 참여를 통해 건강한 리더십과 힐링 능력을 함양하시는 분들께, 중앙대학교 광명병원의 건강검진 프로그램을 특별 할인 혜택과 함께 제공함으로써, 더욱 건강하고 행복한 삶을 이루어 가실 수 있기를 기원합니다.</p>

                                    {/* <Link legacyBehavior  href="/about"> */}
                                        <div className="read-more-btn" onClick={()=>downloadFile("/special.xlsx", "건강검진 특전.xlsx")} style={{cursor:"pointer"}}>
                                            <DownloadOutlinedIcon />
                                            건강검진 할인 목록 다운로드 
                                        </div>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default AboutUs;