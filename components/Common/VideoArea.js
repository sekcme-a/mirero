import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const VideoArea = () => {
    const [toggler, setToggler] = useState(false);
    return (
		<>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/embed/Ogn8fOTtp6s',
                ] }
            />

			<section className="video-area ptb-100 pb-0">
                <div className="container">
                    <div className="video-content">
                        <h2>리더스 힐링 아카데미를 소개합니다</h2>
                        <p className="keep-all bold">중앙대학교 광명병원 최고의 의료시설과 의료진와 함께하는 건강과 행복을 위한 국내 최고의 사회교육과정, 리더스 힐링 아카데미를 소개 영상입니다.</p>
                    </div>

                    <div className="video-box">
                        <img src="/images/video-img.png" alt="image" />

                        <div className="play-video">
                            <div
                                onClick={ () => setToggler(!toggler) }
                                className="video-btn"
                            > 
                                <i className="flaticon-play-button-1"></i>
                            </div>
                        
                            <span>눌러서 확인</span>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: "50px"}} />
            </section>
		</>
    );
}

export default VideoArea;