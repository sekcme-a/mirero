import React, { Component } from 'react';
import Link from 'next/link';
import styles from "styles/custom/custom.module.css"


const data = [
    {
        title: "개강식",
        content: "사단법인 미래로 개강식 (병원장님 인사, 홍보영상 시청)",
        year: 2023,
        month: "April(4월)",
        day: 4,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/001.png"
    },
    {
        title: "원우자기소개 및 병원시설투어",
        content: "원우 자기소개 및 중앙대학교 광명병원 시설 투어",
        year: 2023,
        month: "April(4월)",
        day: 11,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/schedule2.jpeg"
    },
    {
        title: "병원장님 특강 / 강사진 소개",
        content: "이철희 병원장님의 특강와 강사진 소개",
        year: 2023,
        month: "April(4월)",
        day: 18,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/002.png"
    },
    {
        title: "코로나19 이후 바이러스 예방법 / 유머특강",
        content: "코로나19 이후 바이러스 예방법(감염내과 김민철) / 유머특강",
        year: 2023,
        month: "April(4월)",
        day: 25,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/003.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=80&profNo=324&empNo=01234"
    },
    {
        title: "췌장암의 진단과 치료 / 축하연",
        content: "췌장암의 진단과 치료(소화기내과 박태영) / 축하연: 외부식당",
        year: 2023,
        month: "May(5월)",
        day: 2,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/004.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=108&profNo=413&empNo=01391"
    },
    {
        title: "노산의 위험성 및 예방법 / 대금연주",
        content: "노산의 위험성 및 예방법(산부인과 김유민) / 대금연주",
        year: 2023,
        month: "May(5월)",
        day: 9,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/005.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=102&profNo=328&empNo=01302"
    },
    {
        title: "태국 수학여행",
        content: "자체행사: 태국 수학여행",
        year: 2023,
        month: "May(5월)",
        day: 16,
        where: "태국",
        when: "7PM~9PM",
        image: "/images/program/006.png"
    },
    {
        title: "화상사고 발생시 주의사항 및 치료법 / 명상(촛불)특강",
        content: "화상사고 발생시 주의사항 및 치료법(성형외과 배태희) / 명상(촛불)특강",
        year: 2023,
        month: "May(5월)",
        day: 23,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/007.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=105&profNo=339&empNo=00812"
    },
    {
        title: "신장암, 방광암 / 개인홍보영상",
        content: "신장암, 방광암 (비뇨의학과 김정훈) / 개인홍보영상",
        year: 2023,
        month: "May(5월)",
        day: 30,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/008.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=99&profNo=407&empNo=01457"
    },
    {
        title: "뇌졸중 증상 및 예방법 / 교육원장 특강",
        content: "뇌졸중 증상 및 예방법 (신경과 하삼열) / 교육원장 특강",
        year: 2023,
        month: "June(6월)",
        day: 13,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/009.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=110&profNo=363&empNo=01375"
    },
    {
        title: "근감소증 예방법 / 와인수업",
        content: "근감소증 예방법 (재활의학과 김돈규) / 와인수업",
        year: 2023,
        month: "June(6월)",
        day: 20,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/010.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=90&profNo=322&empNo=00742"
    },
    {
        title: "위식도 역류질환의 수술적 치료 / 지압안마특강",
        content: "위식도 역류질환의 수술적 치료 (외과 박중민) / 지압안마특강",
        year: 2023,
        month: "June(6월)",
        day: 27,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/011.png",
        url:"https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=115&profNo=337&empNo=00953"
    },
    {
        title: "심폐소생술 / 한방원장특강",
        content: "심폐소생술 or 응급식 이용법 (응급의학과 김찬웅) / 한방원장특강",
        year: 2023,
        month: "July(7월)",
        day: 4,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/012.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=86&profNo=329&empNo=00796"
    },
    {
        title: "대부도 승마체험",
        content: "자체행사: 대부도 승마체험",
        year: 2023,
        month: "July(7월)",
        day: 11,
        where: "대부도",
        when: "7PM~9PM",
        image: "/images/program/013.png"
    },
    {
        title: "중년의 정신건강 / 뇌교육",
        content: "중년의 정신건강 (정신건강의학과 서정석) / 뇌교육",
        year: 2023,
        month: "July(7월)",
        day: 18,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/014.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=91&profNo=341&empNo=01349"
    },
    {
        title: "관절염, 골다공증의 예방 및 치료 / 추나특강",
        content: "관절염, 골다공증의 예방 및 치료 (정형외과 박용범) / 추나특강",
        year: 2023,
        month: "July(7월)",
        day: 25,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/015.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=92&profNo=336&empNo=01186"
    },
    {
        title: "노안, 백내장 등 치료법와 예방법 / 안경과 렌즈",
        content: "노안, 백내장, 녹내장 초기증상 및 치료법, 예방법 (안과 김응수) / 안경과 렌즈",
        year: 2023,
        month: "August(8월)",
        day: 1,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/016.png",
        url: "https://gh.cauhs.or.kr/home/medical/profView.do?deptNo=113&profNo=406&empNo=01450"
    },
    {
        title: "소감 발표",
        content: "소감 발표 및 신입원우 모집 안내",
        year: 2023,
        month: "August(8월)",
        day: 8,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "7PM~9PM",
        image: "/images/program/001.png"
    },
    {
        title: "수료식",
        content: "수료식 (병원장님 축사, 집행부 인사, 교육 과정 영상 시청, 축하공연) 식사: 외부식당",
        year: 2023,
        month: "August(8월)",
        day: 22,
        where: "중앙대학교 광명병원 김부섭홀",
        when: "6PM~9PM",
        image: "/images/program/001.png"
    },

]
class EventContent extends Component {
    render() {
        return (
            <>
                <section className="event-area ptb-100">
                    <div className={`container ${styles.schedule_container}`}>
                    <p>모든 프로그램은 매주 화요일에 진행되며, 프로그램 일정 및 내용은 상황에 따라 변경될 수 있으며, 변경 사항이 발생할 경우 사전에 공지할 예정입니다.</p>

                    {data.map((item, index) => {
                        if(index%2===0)
                            return(
                                <div className="single-event-box">
                                    <div className="event-image">
                                            <img src={item.image} alt={item.title}/>
                                    </div>
        
                                    <div className="event-content">
                                        <div className="content">
                                            <h3>
                                                    <a>{item.title}</a>
                                            </h3>
                                            <p>{item.content}</p>
        
                                            <div className="date">
                                                {item.day}
                                                <sup>{item.month}</sup>
                                                <sub>{item.year}</sub>
                                            </div>
        
                                            <ul>
                                                <li>
                                                    <span>Where</span>
                                                    {item.where}
                                                </li>
                                                <li>
                                                    <span>When</span>
                                                    {item.when}
                                                </li>
                                            </ul>
        
                                            {item.url && 
                                                <Link legacyBehavior  href={item.url}>
                                                    <a className={styles.schedule_button} target="_blank">
                                                        의료진 소개
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        else
                            return(
                                <div className="single-event-box">
                                    <div className="event-content">
                                        <div className="content">
                                            <h3>
                  
                                                    <a>{item.title}</a>
               
                                            </h3>
                                            <p>{item.content}</p>
        
                                            <div className="date">
                                                {item.day}
                                                <sup>{item.month}</sup>
                                                <sub>{item.year}</sub>
                                            </div>
        
                                            <ul>
                                                <li>
                                                    <span>Where</span>
                                                    {item.where}
                                                </li>
                                                <li>
                                                    <span>When</span>
                                                    {item.when}
                                                </li>
                                            </ul>
                                            {item.url && 
                                                <Link legacyBehavior href={item.url}>
                                                    <a className={styles.schedule_button} target="_blank">
                                                        의료진 소개
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
        
                                    <div className="event-image">
                                            <img src={item.image} alt={item.title} />
                                    </div>
                                </div>
                            )
                    })}
                    </div>
                </section>
            </>
        );
    }
}

export default EventContent;