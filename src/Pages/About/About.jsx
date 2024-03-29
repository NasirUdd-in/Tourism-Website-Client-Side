import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-page">
            <div className="container">

                <div className="team">
                    <h1>⛱ Founder</h1>
                    <p className="title">
                        We’re impartial and independent, and every day we create
                        distinctive, world-class programmes and content
                    </p>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card team-card">
                                <img
                                    src="https://i.ibb.co/0C3bw5v/photo-1531427186611-ecfd6d936c79.jpg"
                                    alt=""
                                />
                                <h3>Dara Frazier</h3>
                                <p>Co-Founder, Chief Strategy Officer</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card team-card">
                                <img
                                    src="https://i.ibb.co/7YSc2qH/360-F-285983137-YVg-Uz-Zwv-Yi9-Pzk-XU0-Ms-Psyu-WMg-Cj83-DW.jpg"
                                    alt=""
                                />
                                <h3>Dara Frazier</h3>
                                <p>Co-Founder, Chief Strategy Officer</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card team-card">
                                <img
                                    src="https://i.ibb.co/tzZJ7wg/pexels-photo-220453.jpg"
                                    alt=""
                                />
                                <h3>Dara Frazier</h3>
                                <p>Co-Founder, Chief Strategy Officer</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card team-card">
                                <img
                                    src="https://i.ibb.co/vQrK732/photo-1472099645785-5658abf4ff4e.jpg"
                                    alt=""
                                />
                                <h3>Dara Frazier</h3>
                                <p>Co-Founder, Chief Strategy Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial text-center">
                    <h1>Good news from far away</h1>
                    <p>Let's see what people think of Chisfis</p>
                    <div className="testimonial-slider">
                        <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="content">
                                        <p className="feedback">
                                            This place is exactly like the
                                            picture posted on Chisfis. Great
                                            service, we had a great stay!
                                        </p>
                                        <h2>Berta Emili</h2>
                                        <h5>
                                            <i className="fal fa-map-marker-alt"></i>
                                            Tokyo
                                        </h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="content">
                                        <p className="feedback">
                                            This place is exactly like the
                                            picture posted on Chisfis. Great
                                            service, we had a great stay!
                                        </p>
                                        <h2>Berta Emili</h2>
                                        <h5>
                                            <i className="fal fa-map-marker-alt"></i>
                                            Tokyo
                                        </h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="content">
                                        <p className="feedback">
                                            This place is exactly like the
                                            picture posted on Chisfis. Great
                                            service, we had a great stay!
                                        </p>
                                        <h2>Berta Emili</h2>
                                        <h5>
                                            <i className="fal fa-map-marker-alt"></i>
                                            Tokyo
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev"
                            >
                                {/* <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span> */}
                                <span>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="next"
                            >
                                {/* <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span> */}
                                <span>
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row newsletter-section">
                    <div className="col-lg-6 newsletter">
                        <h1>Join our newsletter 🎉</h1>
                        <p>
                            Read and share new perspectives on just about any
                            topic. Everyone’s welcome.
                        </p>
                        <ol>
                            <li>Get more discount</li>
                            <li>Get premium magazines</li>
                        </ol>
                        <form className="subscribe">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button className="btn btn-subs">
                                <i className="fad fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-img">
                            <img
                                src="https://i.ibb.co/FsJxwbL/SVG-subcribe2-efb832b2.png"
                                alt="contact illustration"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
