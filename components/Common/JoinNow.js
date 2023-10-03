import React from 'react';
import Link from 'next/link';

const JoinNow = ({title, subtitle, button}) => {
    return (
        <>
            <section className="join-area ptb-100" style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="join-content keep-all">
                        <h2>{title}</h2>
                        <p className='bold'>{subtitle}</p>

                        <Link legacyBehavior href={button.link}>
                            <a className="default-btn">
                                {button.text}<i className="flaticon-right-chevron"></i>
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default JoinNow;
