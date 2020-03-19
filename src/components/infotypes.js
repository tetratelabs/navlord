import React from "react";
import { infoData } from "./data/infoTypeData";
import { v4 as uuidv4 } from "uuid";

const InfoTypes = () => {
  const infoTypeList = infoData.map(infotype => {
    
    return (
      <div key={uuidv4()} className="infoType">
        {infotype}
      </div>
    );
  });

  return <div className="infoTypeCon">{infoTypeList}</div>;
};

export default InfoTypes;
