import React from "react";
import Tetrate from "./assets/tetrate-logo.png";

const Info = ({ data }) => {
    return (
        <div className="info-con">
            <div className="info-img">
                <img src={Tetrate} alt="Tetrate logo" />
            </div>
            <div>
                <h3 className="info-title">{data.title} </h3>
                <p className="info-overview"> {data.overview}</p>
            </div>
        </div>
    );
};

export default Info;
