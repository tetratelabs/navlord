import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Matt from "../assets/matt-klein.jpg";
import Play from "../assets/play-button.svg";

const ResourceBar = ({res}) => {

    let navData = res.map( nav=> {
        return (
            <button className="info-con" key={uuidv4}>
                <a
                    href={nav.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="info-img">
                        <img src={Matt} alt="Matt Klein" />
                    </div>
                    <div className="info">
                        <div className="info-extra">
                            <img src={Play} alt="Play Icon" />
                            <p>Play Time: 5 mins</p>
                        </div>
                        <h3 className="info-title">{nav.title} </h3>
                        <p className="info-overview"> {nav.overview}</p>
                    </div>
                </a>
            </button>
            
        );
    })

    return ( 
        <div className="content-con">{navData}</div>
     );
}
 
export default ResourceBar;