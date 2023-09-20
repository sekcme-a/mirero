import React, { Component } from 'react';
import Link from 'next/link';

const data = [
    {
        image:"/images/team/001.png",
        name: "김민철",
        type: "감염내과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=80&profNo=324&empNo=01234"
    },
    {
        image:"/images/team/002.png",
        name: "박태영",
        type: "소화기내과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=108&profNo=413&empNo=01391"
    },
    {
        image:"/images/team/003.png",
        name: "김유민",
        type: "산부인과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=102&profNo=328&empNo=01302"
    },
    {
        image:"/images/team/004.png",
        name: "배태희",
        type: "성형외과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=105&profNo=339&empNo=00812"
    },
    {
        image:"/images/team/005.png",
        name: "김정훈",
        type: "비뇨의학과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=99&profNo=407&empNo=01457"
    },
    {
        image:"/images/team/006.png",
        name: "하삼열",
        type: "신경과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=110&profNo=363&empNo=01375"
    },
    {
        image:"/images/team/007.png",
        name: "김돈규",
        type: "재활의학과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=90&profNo=322&empNo=00742"
    },
    {
        image:"/images/team/008.png",
        name: "박중민",
        type: "외과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=115&profNo=337&empNo=00953"
    },
    {
        image:"/images/team/009.png",
        name: "김찬웅",
        type: "응급의학과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=86&profNo=329&empNo=00796"
    },
    {
        image:"/images/team/010.png",
        name: "서정석",
        type: "정신건강의학과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=91&profNo=341&empNo=01349"
    },
    {
        image:"/images/team/011.png",
        name: "박용범",
        type: "정형외과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=92&profNo=336&empNo=01186"
    },
    {
        image:"/images/team/012.png",
        name: "김응수",
        type: "안과",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=113&profNo=406&empNo=01450"
    },
   
]

class TeamContent extends Component {
    render() {
        return (
            <>
            
                <div className="team-area pt-100 pb-70">
                    <div className="container">
                    <p style={{fontSize:"18px", fontWeight:"700"}} className="keep-all">사단법인 미래로는 중앙대학교 광명병원 최고의 의료시설와 의료진과 함께합니다.</p>
                        <div className="row">
                            {data.map((item, index) => {
                                return(
                                    <div className="col-lg-3 col-md-4 col-sm-6" style={{cursor:"pointer"}} key={index}>
                                        <Link legacyBehavior key={index} href={item.url}>
                                            <a target="_blank">
                                                <div className="single-team-box">
                                                    <div className="image">
                                                        <img src={item.image} alt="image" />
                
                                                        <ul className="social" style={{color:"white", fontWeight:"700", padding:"5px 20px", cursor:"pointer"}}>
                                                            정보 보기
                                                            {/* <li>
                                                                <a href="https://www.facebook.com/" target="_blank">
                                                                    <i className="fab fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://twitter.com/">
                                                                    <i className="fab fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.linkedin.com/">
                                                                    <i className="fab fa-linkedin-in"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.instagram.com/">
                                                                    <i className="fab fa-instagram"></i>
                                                                </a>
                                                            </li> */}
                                                        </ul>
                                                    </div>
                
                                                    <div className="content">
                                                        <h3>{item.name}</h3>
                                                        <span>{item.type}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>

                                )
                            })}
   
 
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TeamContent;