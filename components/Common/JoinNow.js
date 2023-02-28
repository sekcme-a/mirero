import React, { Component } from 'react';
import Link from 'next/link';

class JoinNow extends Component {
    render() {
        return (
            <>
                <section className="join-area ptb-100">
                    <div className="container">
                        <div className="join-content keep-all">
                            <h2>리더스 힐링 아카데미와 함께하세요.</h2>
                            <p className='bold'>최고의 의료시설과 의료진, 원우분들과 함께하세요.</p>

                            <Link legacyBehavior  href="#" >
                                <a className="default-btn">
                                    등록하기 <i className="flaticon-right-chevron"></i> 
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default JoinNow;