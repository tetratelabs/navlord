import React from "react";
import logo from "../assets/tetratelogo.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footContainer">
                <div className="footer-blocks">
                    <a
                        href="http://tetrate.io.dream.website/"
                        rel="noopener noreferrer"
                    >
                        <img src={logo} alt="Tetrate Logo" />
                    </a>
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
                <div className="footer-blocks">
                    <p className="footHigh">Products</p>
                    <a
                        href="http://tetrate.io.dream.website/tetrate-service-bridge/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Tetrate Service Bridge</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/tetrate-istio-subscription/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Tetrate Istio Subscription</p>
                    </a>

                    <p className="footHigh">Community</p>

                    <a
                        href="http://tetrate.io.dream.website/open-source/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Open Source</p>
                    </a>
                </div>
                <div className="footer-blocks">
                    <p className="footHigh">Learn</p>
                    <a
                        href="http://tetrate.io.dream.website/istio-up-and-running/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Istio: Up & Running</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/tetrate-library/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Tetrate Library</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/learn-events/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Events</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/blog/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Blog</p>
                    </a>
                </div>
                <div className="footer-blocks">
                    <p className="footHigh">Company</p>
                    <a
                        href="http://tetrate.io.dream.website/about/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">About Us</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/team/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Team</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/careers/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Careers</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/press/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Press</p>
                    </a>
                    <a
                        href="http://tetrate.io.dream.website/contact-us/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Contact</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
