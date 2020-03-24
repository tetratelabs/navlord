import React from "react";
import { infoData } from "./data/infoTypeData";
import { v4 as uuidv4 } from "uuid";

const InfoTypes = () => {
  const infoTypeList = infoData.map(infotype => {
    return (
      <div key={uuidv4()} className="infotype">
        {infotype}
      </div>
    );
  });

  return (
    <div className="infotype-background">
      <div className="infotype-con">{infoTypeList}</div>
    </div>
  )
};

export default InfoTypes;
