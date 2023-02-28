import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <>
                <section className="gallery-area pt-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Tuam Spaces Gallery</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="shorting">
                            <div className="row">
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery1.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery2.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery3.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery4.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery5.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery6.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery7.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery8.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery9.jpg" alt="image" />
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src="/images/gallery/gallery10.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Gallery;