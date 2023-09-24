import React, { Component } from 'react';
import Link from 'next/link';

class JoinNow extends Component {
    render() {
        return (
            <>
                <section className="join-area ptb-100">
                    <div className="container">
                        <div className="join-content keep-all">
                            <h2>사단법인 미래로와 함께하세요.</h2>
                            <p className='bold'>사단법인 미래로와 함께하세요. 우리의 사회와 미래를 밝게 만들기 위한 소중한 노력을 후원해주십시오. 함께하는 여러분의 지지로 더 나은 세상을 만들어갑니다.
                            후원_문구</p>

                            <Link legacyBehavior  href="/apply/main" >
                                <a className="default-btn">
                                    후원하러 가기 <i className="flaticon-right-chevron"></i> 
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