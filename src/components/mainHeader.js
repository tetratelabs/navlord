import React, { useState } from "react";
import Navigation from "./navigation";
import { v4 as uuidv4 } from "uuid";
// import MapHotspots from "./mapHotspots";
import Illustration from "./illustration";
import GraphContextProvider from "./contexts/graphContext";
import Grid from "./grid";
import Hotspot from "./hotspot";
import Jigsaw from "../tetrateJigsaw";

const MainHeader = () => {

    const [grid, setGrid] = useState('grid1');

    return (
        <div className="mainHeader">
            <GraphContextProvider>
                <Grid scale={grid}/>
                <div className="illustration">
                    <Illustration />
                </div>
                <div className="jigsaw-con">
                    <Jigsaw grid={setGrid}/>
                </div>

            </GraphContextProvider>
        </div>
    );
};

export default MainHeader;
