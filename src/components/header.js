import React, { useState, useEffect } from "react";
import logo from "../assets/tetrate-logo-black-transparent.png";
import tsb from "../assets/tetrate-service-bridge.svg";
import ta from "../assets/tetrate-academy.svg";
import events from "../assets/events.svg";
import tcloud from "../assets/tetrate-cloud.svg";
import tis from "../assets/tetrate-istio-subscription.svg";
import tlib from "../assets/tetrate-library.svg";
import press from "../assets/press-news.svg";
import os from "../assets/open-source.svg";
import ebook from "../assets/e-book.svg";
import contact from "../assets/contact.svg";
import careers from "../assets/careers.svg";
import about from "../assets/about-us.svg";

const Header = () => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    const [hover6, setHover6] = useState(false);
    const [hover7, setHover7] = useState(false);
    const [hover8, setHover8] = useState(false);
    const [hover9, setHover9] = useState(false);
    const [hover10, setHover10] = useState(false);
    const [hover12, setHover12] = useState(false);
    const [hover13, setHover13] = useState(false);
    const [hover14, setHover14] = useState(false);
    const [hover15, setHover15] = useState(false);
    const [hover16, setHover16] = useState(false);
    const [hover11, setHover11] = useState(false);



    const [header, setHeader] = useState("header");

    const listenScrollEvent = (event) => {
        if (window.scrollY < 23) {
            return setHeader("header");
        } else if (window.scrollY > 20) {
            return setHeader("header-scroll");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    const handleHover1 = () => {
        setHover1(!hover1);
    };

    const handleHover2 = () => {
        setHover2(!hover2);
    };

    const handleHover3 = () => {
        setHover3(!hover3);
    };

    const handleHover4 = () => {
        setHover4(!hover4);
    };

    const handleHover5 = () => {
        setHover5(!hover5);
    };

    const handleHover6 = () => {
        setHover6(!hover6);
    };

    const handleHover7 = () => {
        setHover7(!hover7);
    };

    const handleHover8 = () => {
        setHover8(!hover8);
    };

    const handleHover9 = () => {
        setHover9(!hover9);
    };

    const handleHover10 = () => {
        setHover10(!hover10);
    };

    const handleHover11 = () => {
        setHover11(!hover11);
    };
    const handleHover12 = () => {
        setHover12(!hover12);
    };
    const handleHover13 = () => {
        setHover13(!hover13);
    };
    const handleHover14 = () => {
        setHover14(!hover14);
    };
    const handleHover15 = () => {
        setHover15(!hover15);
    };
    const handleHover16 = () => {
        setHover16(!hover16);
    };


    return (
        <div className={header}>
            <div className="navContainer">
                <div className="logo-holder">
                    <a href="https://tetrate.io/" rel="noopener noreferrer">
                        <img src={logo} alt="Tetrate Logo" />
                    </a>
                </div>

                <div className="links-holder">
                    <div
                        className="hover-area"
                        onMouseEnter={handleHover1}
                        onMouseLeave={handleHover1}
                    >
                        <p
                            className="links"
                            style={
                                hover1
                                    ? { color: "#f05623" }
                                    : { color: "#000000" }
                            }
                        >
                            PRODUCTS ▼
                        </p>
                        <div
                            className={
                                hover1
                                    ? "product-drop dropdown"
                                    : "product-drop-hide"
                            }
                        >
                            <a
                                href="https://tetrate.io/tetrate-service-bridge/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover5}
                                    onMouseLeave={handleHover5}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={tsb}
                                            alt="Tetrate Service Bridge"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover5
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Tetrate Service Bridge
                                        </h4>
                                        <p
                                            style={
                                                hover5
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Application connectivity platform
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://www.tetrate.io/tetrate-cloud/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover6}
                                    onMouseLeave={handleHover6}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={tcloud}
                                            alt="Tetrate Cloud"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover6
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Tetrate Cloud
                                        </h4>
                                        <p
                                            style={
                                                hover6
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Fully managed Tetrate Service Bridge
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://www.tetrate.io/tetrate-istio-subscription/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover7}
                                    onMouseLeave={handleHover7}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={tis}
                                            alt="Tetrate Istio Subscription"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover7
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Tetrate Istio Subscription
                                        </h4>
                                        <p
                                            style={
                                                hover7
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Enterprise-grade Istio
                                        </p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>

                    {/* <a
                        href="https://tetrate.io/tetrate-service-bridge/"
                        rel="noopener noreferrer"
                    >
                        <p
                            className="links"
    
                        >
                            TETRATE SERVICE BRIDGE
                        </p>
                    </a> */}

                    <a
                        href="https://www.tetrate.io/blog/"
                        rel="noopener noreferrer"
                        onMouseEnter={handleHover4}
                        onMouseLeave={handleHover4}
                    >
                        <p
                            className="links"
                            style={
                                hover4
                                    ? { color: "#f05623" }
                                    : { color: "#000000" }
                            }
                        >
                            BLOG
                        </p>
                    </a>

                    <div
                        className="hover-area"
                        onMouseEnter={handleHover2}
                        onMouseLeave={handleHover2}
                    >
                        <p
                            className="links"
                            style={
                                hover2
                                    ? { color: "#f05623" }
                                    : { color: "#000000" }
                            }
                        >
                            RESOURCES ▼
                        </p>
                        <div
                            className={
                                hover2
                                    ? "learn-drop dropdown"
                                    : "learn-drop-hide"
                            }
                        >
                            <a
                                href="https://academy.tetrate.io/courses/istio-fundamentals"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover8}
                                    onMouseLeave={handleHover8}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={ta}
                                            alt="Tetrate Academy"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover8
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Tetrate Academy
                                        </h4>
                                        <p
                                            style={
                                                hover8
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Learn Istio fundamentals
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://resources.tetrate.io"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover9}
                                    onMouseLeave={handleHover9}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={tlib}
                                            alt="Tetrate Library"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover9
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Tetrate Library
                                        </h4>
                                        <p
                                            style={
                                                hover9
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Whitepapers, podcasts, guides and more
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://www.tetrate.io/apache-skywalking-ebook-tetrate/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover10}
                                    onMouseLeave={handleHover10}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={ebook}
                                            alt="Free eBook: SkyWaking"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover10
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Free eBook: SkyWalking
                                        </h4>
                                        <p
                                            style={
                                                hover10
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Your guide to observability at scale
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div
                        className="hover-area"
                        onMouseEnter={handleHover3}
                        onMouseLeave={handleHover3}
                    >
                        <p
                            className="links"
                            style={
                                hover3
                                    ? { color: "#f05623" }
                                    : { color: "#000000" }
                            }
                        >
                            COMPANY ▼
                        </p>
                        <div
                            className={
                                hover3
                                    ? "company-drop dropdown"
                                    : "company-drop-hide"
                            }
                        >
                            <a
                                href="https://tetrate.io/about/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover11}
                                    onMouseLeave={handleHover11}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={about}
                                            alt="About Us Icon"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover11
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            About Us
                                        </h4>
                                        <p
                                            style={
                                                hover11
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            The Tetrate chronicles
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://tetrate.io/learn-events/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover12}
                                    onMouseLeave={handleHover12}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={events}
                                            alt="Events icon"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover12
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Events
                                        </h4>
                                        <p
                                            style={
                                                hover12
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Webinars, conferences, and meetups
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://tetrate.io/careers/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover13}
                                    onMouseLeave={handleHover13}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={careers}
                                            alt="Careers icon"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover13
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Careers
                                        </h4>
                                        <p
                                            style={
                                                hover13
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            We are hiring!
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://www.tetrate.io/open-source-contributions/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover14}
                                    onMouseLeave={handleHover14}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={os}
                                            alt="Open Source icon"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover14
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Open Source
                                        </h4>
                                        <p
                                            style={
                                                hover14
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Our contributions and projects
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://tetrate.io/press/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover15}
                                    onMouseLeave={handleHover15}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={press}
                                            alt="press icon"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover15
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Press
                                        </h4>
                                        <p
                                            style={
                                                hover15
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Media coverage and announcements
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://tetrate.io/contact-us/"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="dropdown-box"
                                    onMouseEnter={handleHover16}
                                    onMouseLeave={handleHover16}
                                >
                                    <div className="dropdown-icon">
                                        <img
                                            src={contact}
                                            alt="contact us icon"
                                        />
                                    </div>
                                    <div className="dropdown-details">
                                        <h4
                                            style={
                                                hover16
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)"}
                                            }
                                        >
                                            Contact Us
                                        </h4>
                                        <p
                                            style={
                                                hover16
                                                    ? { color: "#f05623" }
                                                    : { color: "rgb(90, 90, 90)" }
                                            }
                                        >
                                            Get in touch and let's talk
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <a
                        href="https://tetrate.io/contact-us/"
                        rel="noopener noreferrer"
                    >
                        <button>GET DEMO</button>
                    </a>
                </div>
            </div>

            <a href="#menu">
                <button className="menu-mobile">Menu</button>
            </a>
        </div>
    );
};

export default Header;
