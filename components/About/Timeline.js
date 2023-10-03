import React from 'react';
import styles from './Timeline.module.css';
import { useEffect, useState } from 'react';

const Timeline = () => {
  const [fetchedData, setFetchedData]= useState({
    title: '사단법인 미래로 연혁',
    description: '사단법인 미래로의 연혁을 소개합니다.',
    events: [
      {
        date: '2021년 8월',
        title: '아름드리 봉사회 결성',
        content: '',
      },  
      {
        date:'2021년 9월',
        title: '다문화청소년 장학 한다장학 후원회 MOU 체결'
      },
      {
        date:'2021년 9월',
        title:'제1회 한다장학 행사 지원'
      },
      {
        date:'2021년 10월',
        title: '제2회 한다장학 행사 지원'
      },
      {
        date:'2021년 11월',
        title: '제3회 한다장학 행사 지원'
      },
      {
        date: '2021년 11월',
        title: '안산시외국인주민상담지원센터 이웃사랑 쌀 100kg 나눔 후원 지원'
      },
      {
        date:'2021년 12월',
        title:'제4회 한다장학 행사 지원'
      },
      {
        date:'2021년 12월',
        title:'에티오피아 화재피해 가정 물품 후원(이불)'
      },
      {
        date: '2022년 3월',
        title:'한국다문화뉴스 연계 다문화 시민기자단 운영지원'
      },
      {
        date:'2022년 7월',
        title:'외국인 독거노인 의료비 지원'
      },
      {
        date: '2023년 2월',
        title:'다문화, 외국인 동아리 자조모임 지원(2개 동아리)'
      },
      {
        date:'2023년 8월',
        title: '사단법인 미래로 설립'
      }
    ],
  })


  return (
    <div className={styles.containerFluid}>
      <div className={styles.row} style={{marginTop:"40px"}}>
        {/* <div className={styles.exampleTitle}>
          <h2 style={{position:"relative"}}>{fetchedData.title}</h2>
          <p style={{position:"relative"}}>{fetchedData.description}</p>
        </div> */}
        <div className={styles.colXs10}>
          <ul className="timeline" style={{position:"relative"}}>
            {fetchedData.events?.map((event, eventIndex) => (
              <li key={eventIndex} className={styles.timelineItem}>
                <div className={styles.timelineInfo}>
                  <span>{event.date}</span>
                </div>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p>{event.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
