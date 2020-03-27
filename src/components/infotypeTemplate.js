import React from "react";
import Info from "./infoTemplate";
import { v4 as uuidv4 } from "uuid";

const Infotype = ({ infotype }) => {
    
    const infoList = infotype.info.map(data => {
        return (
            <div key={uuidv4()}>
                <Info data={data} />
            </div>
        );
    });
    return (
        <div>
            {infoList}
        </div>
    );
};

export default Infotype;
