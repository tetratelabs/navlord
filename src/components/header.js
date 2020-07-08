import React, { useState, useEffect } from "react";
import logo from "../assets/tetratelogo.svg";

const Header = () => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

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

    return (
        <div className={header}>
            <div className="navContainer">
                <div className="logo-holder">
                    <a
                        href="http://tetrate.io.dream.website/"
                        rel="noopener noreferrer"
                    >
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
                                    ? { "border-bottom": "#f05623 2px solid" }
                                    : { "border-bottom": "#00000000 0 solid" }
                            }
                        >
                            PRODUCTS ⌄
                        </p>
                        <div
                            className={
                                hover1
                                    ? "product-drop dropdown"
                                    : "product-drop-hide"
                            }
                        >
                            <a
                                href="http://tetrate.io.dream.website/tetrate-service-bridge/"
                                rel="noopener noreferrer"
                            >
                                <p>Tetrate Service Bridge</p>
                            </a>

                            <a
                                href="http://tetrate.io.dream.website/tetrate-istio-subscription/"
                                rel="noopener noreferrer"
                            >
                                <p>Tetrate Istio Subscription</p>
                            </a>
                        </div>
                    </div>

                    <a
                        href="http://tetrate.io.dream.website/open-source/"
                        rel="noopener noreferrer"
                    >
                        <p
                            className="links"
    
                        >
                            OPEN SOURCE
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
                                    ? { "border-bottom": "#f05623 2px solid" }
                                    : { "border-bottom": "#00000000 0 solid" }
                            }
                        >
                            LEARN ⌄
                        </p>
                        <div
                            className={
                                hover2
                                    ? "learn-drop dropdown"
                                    : "learn-drop-hide"
                            }
                        >
                            <a
                                href="http://tetrate.io.dream.website/istio-up-and-running/"
                                rel="noopener noreferrer"
                            >
                                <p>Istio: Up & Running</p>
                            </a>
                            <a
                                href="http://tetrate.io.dream.website/tetrate-library/"
                                rel="noopener noreferrer"
                            >
                                <p>Tetrate Library</p>
                            </a>
                            <a
                                href="http://tetrate.io.dream.website/learn-events/"
                                rel="noopener noreferrer"
                            >
                                <p>Events</p>
                            </a>
                            <a
                                href="http://tetrate.io.dream.website/blog/"
                                rel="noopener noreferrer"
                            >
                                <p>Blog</p>
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
                                    ? { "border-bottom": "#f05623 2px solid" }
                                    : { "border-bottom": "#00000000 0 solid" }
                            }
                        >
                            COMPANY ⌄
                        </p>
                        <div
                            className={
                                hover3
                                    ? "company-drop dropdown"
                                    : "company-drop-hide"
                            }
                        >
                            <a
                                href="http://tetrate.io.dream.website/about/"
                                rel="noopener noreferrer"
                            >
                                <p>About Us</p>
                            </a>
                            <a
                                href="http://tetrate.io.dream.website/team/"
                                rel="noopener noreferrer"
                            >
                                <p>Team</p>
                            </a>
                            <a
                                href="http://tetrate.io.dream.website/careers/"
                                rel="noopener noreferrer"
                            >
                                <p>Careers</p>
                            </a>
                            <a
                                href="http://tetrate.io.dream.website/press/"
                                rel="noopener noreferrer"
                            >
                                <p>Press</p>
                            </a>
                            <a
                                href="http://tetrate.io.dream.website/contact-us/"
                                rel="noopener noreferrer"
                            >
                                <p>Contact Us</p>
                            </a>
                        </div>
                    </div>

                    <a
                        href="http://tetrate.io.dream.website/contact-us/"
                        rel="noopener noreferrer"
                    >
                        <button>GET DEMO</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
