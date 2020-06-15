import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";

const InfoCard = ({nav}) => {

    const [hover, setHover] = useState(false);

    const handleHover = ()=> {
        setHover (!hover);
    } 

    return ( 
        <button className="info-con" key={uuidv4} onMouseEnter={handleHover} onMouseLeave={handleHover} >
                <a
                    href={nav.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="info-img">
                        <img src={nav.pic} alt="Matt Klein" />
                    </div>
                    <div className="info">
                        <div className="info-extra">
                            <img src={nav.icon} alt="Play Icon" />
                            <p>Time: {nav.time} mins</p>
                        </div>
                        <h3 className={hover?"info-title-on":"info-title"}>{nav.title} </h3>
                        <p className="info-overview"> {nav.overview}</p>
                    </div>
                </a>
            </button>
     );
}
 
export default InfoCard;