import React from 'react';
import styles from './Timeline.module.css';
import { useEffect, useState } from 'react';

const Timeline = () => {
  const [fetchedData, setFetchedData]= useState({
    title: '사단법인 미래로 연혁',
    description: '사단법인 미래로의 연혁을 소개합니다.',
    events: [
      {
        date: '2000년 1월 10일',
        title: '회사 설립',
        content: '사단법인 미래로는...',
      },  
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
