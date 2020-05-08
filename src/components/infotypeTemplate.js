import React from "react";
import Info from "./infoTemplate";
import { v4 as uuidv4 } from "uuid";

const Infotype = ({ infotype , selectedInfotype}) => {
    
    // if (infotype.infotype === selectedInfotype) {
    //     return (
    //         <div>
    //             {infotype.info.map(data => {
    //                 return (
    //                     <div key={uuidv4()}>
    //                         <Info data={data} />
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     ); 
    // } else {
    //     return null;
    // }

    return (
        <div className="infotype">
            <p className="infotype-caption">{infotype.infotype}</p>
            {infotype.info.map(data => {
                return (
                    <div className="info-con" key={uuidv4()}>
                        <Info data={data} />
                    </div>
                );
            })}
        </div>
    ); 
}; 


export default Infotype;
