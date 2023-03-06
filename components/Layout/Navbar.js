import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import styles from "../../styles/custom/custom.module.css"

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area">
                    <div className="tuam-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link legacyBehavior  href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo.png" alt="logo" className={styles.navbar_img}/>
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        
                                        <li className="nav-item">
                                            <Link legacyBehavior  href="/" activeClassName="active">
                                                <a className="nav-link">메인화면</a>
                                            </Link>
                                        </li>



                                        <li className="nav-item">
                                            <Link legacyBehavior  href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    소개<i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about" activeClassName="active">
                                                        <a className="nav-link">기본소개</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/greet" activeClassName="active">
                                                        <a className="nav-link">인사말</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/purpose" activeClassName="active">
                                                        <a className="nav-link">설립목적 및 취지</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/video" activeClassName="active">
                                                        <a className="nav-link">소개영상</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/location" activeClassName="active">
                                                        <a className="nav-link">오시는길</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>




                                        <li className="nav-item">
                                            <Link legacyBehavior  href="/program/schedule">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    프로그램<i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/program/schedule" activeClassName="active">
                                                        <a className="nav-link">교육 프로그램</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/program/team" activeClassName="active">
                                                        <a className="nav-link">강사진 소개</a>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </li>







                                        <li className="nav-item">
                                            <Link legacyBehavior  href="/special" activeClassName="active">
                                                <a className="nav-link">특전</a>
                                            </Link>
                                        </li>


                                        {/* <li className="nav-item">
                                            <Link legacyBehavior  href="/the-place" activeClassName="active">
                                                <a className="nav-link">아카데미 소식</a>
                                            </Link>
                                        </li> */}


                                        {/* <li className="nav-item">
                                            <Link legacyBehavior  href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    신청하기<i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about" activeClassName="active">
                                                        <a className="nav-link">모집요강</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about" activeClassName="active">
                                                        <a className="nav-link">신청서 다운로드</a>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </li> */}



                                        <li className="nav-item">
                                            <Link legacyBehavior  href="/contact" activeClassName="active">
                                                <a className="nav-link">문의하기</a>
                                            </Link>
                                        </li>
{/* 
                                        <li className="nav-item">
                                            <Link legacyBehavior  href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Pages <i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/gallery" activeClassName="active">
                                                        <a className="nav-link">Gallery</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="#">
                                                        <a className="nav-link" onClick={e => e.preventDefault()}>Services</a>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link legacyBehavior  href="/services" activeClassName="active">
                                                                <a className="nav-link">Services</a>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link legacyBehavior  href="/service-details" activeClassName="active">
                                                                <a className="nav-link">Service Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/pricing" activeClassName="active">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/team" activeClassName="active">
                                                        <a className="nav-link">Team</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/404" activeClassName="active">
                                                        <a className="nav-link">404 Error</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                    </ul>

                                    <div className="others-option">
                                        <div className="call-us">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            상담문의:
                                            <span className="number">010-5339-6943</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;