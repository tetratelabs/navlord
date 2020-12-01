import React from "react";
import logo from "../assets/tetratelogo.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
    return (
        <div className="footer" id="menu">
            <div className="footContainer">
                <div className="footer-blocks">
                    <div>
                        <a
                            href="https://tetrate.io/"
                            rel="noopener noreferrer"
                        >
                            <img src={logo} alt="Tetrate Logo" />
                        </a>
                    </div>

                    <div className="social-links">
                        <a
                            href="https://twitter.com/tetrateio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={twitter} alt="Twitter Logo" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCtV2o3OvEH6U3DQ0-_7chNw"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={youtube} alt="Twitter Logo" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/tetrate/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="Linkedin Logo" />
                        </a>
                        <a
                            href="https://github.com/tetratelabs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="Github Logo" />
                        </a>
                    </div>
                </div>
                <div className="footer-blocks">
                    <p className="footHigh">Products</p>
                    <a
                        href="https://tetrate.io/tetrate-service-bridge/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Tetrate Service Bridge</p>
                    </a>
                    {/* <a
                        href="https://tetrate.io/tetrate-istio-subscription/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Tetrate Istio Subscription</p>
                    </a> */}

                    <p className="footHigh">Community</p>

                    <a
                        href="https://www.tetrate.io/open-source-contributions/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Open Source</p>
                    </a>
                </div>
                <div className="footer-blocks">
                    <p className="footHigh">Learn</p>
                    {/* <a
                        href="http://tetrate.io/istio-up-and-running/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Istio: Up & Running</p>
                    </a> */}
                    <a
                        href="https://resources.tetrate.io"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Tetrate Library</p>
                    </a>
                    <a
                        href="https://tetrate.io/learn-events/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Events</p>
                    </a>
                    <a
                        href="https://tetrate.io/blog/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Blog</p>
                    </a>
                </div>
                <div className="footer-blocks">
                    <p className="footHigh">Company</p>
                    <a
                        href="https://tetrate.io/about/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">About Us</p>
                    </a>
                    <a
                        href="https://tetrate.io/team/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Team</p>
                    </a>
                    <a
                        href="https://tetrate.io/careers/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Careers</p>
                    </a>
                    <a
                        href="https://tetrate.io/press/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Press</p>
                    </a>
                    <a
                        href="https://tetrate.io/contact-us/"
                        rel="noopener noreferrer"
                    >
                        <p className="footlink">Contact</p>
                    </a>
                </div>
            </div>

            <div className="policies">
                <p>Copyright @Tetrate 2020. All rights reserved.</p>
                <div className="policy-links">
                    <a href="https://tetrate.io/terms-and-conditions/"
                        rel="noopener noreferrer">
                        <p>Terms and Conditions</p>
                    </a>
                    <p>  and  </p>

                    <a href="https://tetrate.io/privacy/"
                        rel="noopener noreferrer">
                        <p>Privacy</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
