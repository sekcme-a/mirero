

import React, { useState, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import styles from "../../styles/custom/custom.module.css";
import useData from 'context/data';
import useUserData from 'context/userData';
import { auth } from 'firebase/firebase';

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const {user} = useUserData()

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        const handleScroll = () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        };

        document.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onLoginClick = () => {

    }

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="tuam-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link legacyBehavior href="/">
                                <a className="navbar-brand">
                                    <img src="/images/logo.png" alt="logo" className={styles.navbar_img} />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={`navbar-toggler navbar-toggler-right ${collapsed ? 'collapsed' : ''}`}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={collapsed}
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={`collapse navbar-collapse ${!collapsed ? 'show' : ''}`} id="navbarSupportedContent" style={{ marginRight: "30px" }}>
                                <ul className="navbar-nav">
                                   
                                <li className="nav-item">
                                            <Link legacyBehavior  href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    사단법인 미래로<i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about" activeClassName="active">
                                                        <a className="nav-link">단체소개</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/greet" activeClassName="active">
                                                        <a className="nav-link">인사말</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/purpose" activeClassName="active">
                                                        <a className="nav-link">설립목적</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/history" activeClassName="active">
                                                        <a className="nav-link">연혁</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/about/team" activeClassName="active">
                                                        <a className="nav-link">조직도</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item">
                                            <Link legacyBehavior  href="/business" activeClassName="active">
                                                <a className="nav-link">사업소개</a>
                                            </Link>
                                        </li>




                                        <li className="nav-item">
                                            <Link legacyBehavior  href="/article/announcement" activeClassName="active">
                                                <a className="nav-link">공지사항</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link legacyBehavior  href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    후원신청<i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/apply/main" activeClassName="active">
                                                        <a className="nav-link">후원신청</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link legacyBehavior  href="/apply/tomorlove" activeClassName="active">
                                                        <a className="nav-link">투머럽클럽</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>


                                        
                                      
                                        <li className="nav-item">
                                            <Link legacyBehavior href="/contact" activeClassName="active">
                                                <a className="nav-link">문의하기</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link legacyBehavior href="/article/notice" activeClassName="active">
                                                <a className="nav-link">게시판</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            {user ? 
                                                <div activeClassName="active" style={{cursor:'pointer'}} onClick={()=>auth.signOut()}>
                                                    <a className="nav-link">로그아웃</a>
                                                </div>
                                                :
                                                <Link legacyBehavior href="/auth/login" activeClassName="active">
                                                    <a className="nav-link">로그인</a>
                                                </Link>
                                            }
                                        </li>

                                        <li className="nav-item">
                                            <Link legacyBehavior href= "https://www.acrc.go.kr/" activeClassName="active">
                                                <a className="nav-link" target='_blank'>공익제보</a>
                                            </Link>
                                        </li>
                                        

                                       \
    
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;
