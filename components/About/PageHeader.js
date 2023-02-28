import React, { Component } from 'react';
import Link from 'next/link';

class PageHeader extends Component {
    render() {
        return (
            <>
                <div className="page-title-area item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>소개</h2>
                                    <ul>
                                        <li>
                                            <Link legacyBehavior  href="/">
                                                <a>메인화면</a>
                                            </Link>
                                        </li>
                                        <li>소개</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PageHeader;