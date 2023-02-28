import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

//urlList  ['https://www.youtube.com/embed/Ogn8fOTtp6s',]
const VideoArea = ({urlList, title, subtitle, thumbnail}) => {
    const [toggler, setToggler] = useState(false);
    return (
		<>
            <FsLightbox
                toggler={ toggler }
                sources={urlList }
            />

			<section className="video-area2 ptb-100 pb-0">
                <div className="container" >
                    <div className="video-content2" >
                        <h2>{title}</h2>
                        <p className="keep-all bold">{subtitle}</p>
                    </div>

                    <div className="video-box">
                        <img src={thumbnail} alt="image" />

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