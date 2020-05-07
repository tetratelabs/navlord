import React from "react";
import Tetrate from "./assets/tetrate-logo.png";

const Info = ({ data }) => {

    return (
        <a className="info-con" href={data.url} target="_blank" rel="noopener noreferrer">
            <div className="info-img">
                <img src={Tetrate} alt="Tetrate logo" />
            </div>
            <div>
                <h3 className="info-title">{data.title} </h3>
                <p className="info-overview"> {data.overview}</p>
            </div>
        </a>
    );
}; 

export default Info;
