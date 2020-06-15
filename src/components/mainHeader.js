import React, { useState } from "react";
import Illustration from "./illustration";
import GraphContextProvider from "./contexts/graphContext";
import Grid from "./grid";
import Jigsaw from "./tetrateJigsaw";
import ResourceContextProvider from "./contexts/resourceContext";

const MainHeader = () => {
    const [grid, setGrid] = useState("grid1");

    return (
        <div className="mainHeader">
            <GraphContextProvider>
                <ResourceContextProvider>
                    <Grid scale={grid} />
                    <div className="illustration">
                        <Illustration />
                    </div>
                    <div className="jigsaw-con">
                        <Jigsaw grid={setGrid} />
                    </div>
                </ResourceContextProvider>
            </GraphContextProvider>
        </div>
    );
};

export default MainHeader;
