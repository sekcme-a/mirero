import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {
    render() {
        return (
            <>
                <div className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="/images/404.png" alt="error" />
                                    
                                    <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
                                    <p>찾고 있는 페이지가 삭제되었거나 이름이 변경되었거나 일시적으로 사용할 수 없을 수 있습니다.</p>

                                    <Link legacyBehavior href="/">
                                        <a className="default-btn">
                                            메인화면으로     <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Error;