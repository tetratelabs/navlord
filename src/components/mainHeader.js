import React from "react";
import Navigation from "./navigation";
import { v4 as uuidv4 } from "uuid";


const MainHeader = () => {
  let navData = Navigation('L0-A');
  console.log(navData);
  const navList = navData.objects.map(nav => {
    return <div key={uuidv4()} className="navLink">{nav.caption}</div>;
  });
  console.log(navList);

  return (
    <div className="mainHeader">
      <div className="illustration">{navList}</div>
      <div className="plane-Button-Con">
        <div className="plane-Button">Management Plane</div>
        <div className="plane-Button">Control Plane</div>
        <div className="plane-Button">Data Plane</div>
      </div>
    </div>
  );
};

export default MainHeader;
