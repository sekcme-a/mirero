import React, { Component } from 'react';
import Link from 'next/link';

class EventDetailsContent extends Component {
    render() {
        return (
            <>
                <section className="event-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="event-details">
                                    <div className="event-details-header">
                                        <Link legacyBehavior  href="/events">
                                            <a className="back-all-event">
                                                <i className="flaticon-left-chevron"></i> Back To All Events
                                            </a>
                                        </Link>

                                        <h3>Ruby on Rails Framework</h3>
                                        <ul className="event-info-meta">
                                            <li><i className="flaticon-calendar"></i> 10 November, 2010</li>
                                            <li><i className="far fa-clock"></i> 10.00AM - 10.00PM</li>
                                        </ul>
                                    </div>

                                    <div className="event-details-image">
                                        <img src="/images/event/event5.jpg" alt="image" />
                                    </div>

                                    <div className="event-details-desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                        <blockquote className="wp-block-quote">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <cite>Tom Cruise</cite>
                                        </blockquote>

                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to aking it look like readable English.</p>

                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) making it look like readable English.</p>
                                    </div>

                                    <div className="event-info-links">
                                        <Link legacyBehavior  href="#">
                                            <a>+ Google Calendar</a>
                                        </Link>
                                        <Link legacyBehavior  href="#">
                                            <a>+ iCal Export</a>
                                        </Link>
                                    </div>

                                    <div className="post-navigation">
                                        <div className="navigation-links">
                                            <div className="nav-previous">
                                                <Link legacyBehavior  href="#">
                                                    <a>
                                                        <i className="flaticon-left-chevron"></i> Prev Events
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="nav-next">
                                                <Link legacyBehavior  href="#">
                                                    <a>
                                                        Next Events <i className="flaticon-right-chevron"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <aside className="widget-area" id="secondary">
                                    <section className="widget widget_event_details">
                                        <h3 className="widget-title">Details</h3>

                                        <ul>
                                            <li><span>Start:</span> December 15, 2020 8:00AM</li>
                                            <li><span>End:</span> December 19, 2020 8:00AM</li>
                                            <li>
                                                <span>Event Category:</span> <Link legacyBehavior  href="#"><a>Web</a></Link>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="widget widget_event_details">
                                        <h3 className="widget-title">Organizer</h3>

                                        <ul>
                                            <li>
                                                <span>Phone:</span> <a href="tel:+1518285679">+1 518 285679</a>
                                            </li>
                                            <li>
                                                <span>Email:</span> <a href="mailto:info@tuam.com">info@tuam.com</a>
                                            </li>
                                            <li>
                                                <span>Website:</span> <a href="http://www.tuam.com" target="_blank">http://www.tuam.com</a>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="widget widget_event_details">
                                        <h3 className="widget-title">Venue</h3>
                                        <ul>
                                            <li>
                                                <a href="#" target="_blank">27 Division St, New York, NY 10002, USA</a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">+ Google Map</a>
                                            </li>
                                        </ul>
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default EventDetailsContent;