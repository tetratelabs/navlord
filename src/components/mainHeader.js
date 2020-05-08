import React, { useState } from "react";
import Navigation from "./navigation";
import { v4 as uuidv4 } from "uuid";
import MapHotspots from "./mapHotspots";
import Illustration from "./illustration";
import GraphContextProvider from "./contexts/graphContext";
import Grid from "./grid";

const MainHeader = () => {
    const [diagram, setDiagram] = useState("L1-M");

    const [manage, setManage] = useState(true);
    const [control, setControl] = useState(false);
    const [data, setData] = useState(false);

    const [grid, setGrid] = useState('grid1');

    const handleM = () => {
        setDiagram("L1-M");

        setManage(true);
        setControl(false);
        setData(false);
        setGrid('grid1');
    };

    const handleC = () => {
        setDiagram("L1-C");

        setControl(true);
        setManage(false);
        setData(false);
        setGrid('grid2'); 
    };

    const handleD = () => {
        setDiagram("L1-D");

        setData(true);
        setManage(false);
        setControl(false);
        setGrid('grid3');
    };

    let navData = Navigation(diagram);
    console.log(navData);

    const hotspots = navData.objects.map((nav) => {
        return (
            <div key={uuidv4()}>
                <MapHotspots node={nav} />
            </div>
        );
    });

    return (
        <div className="mainHeader">
            <GraphContextProvider>
                <Grid scale={grid}/>
                <div className="illustration">
                    <Illustration />
                    {hotspots}
                </div>
                <div className="plane-Button-Con">
                    <div className="button-bar"></div>
                    <div
                        className={
                            manage ? "plane-Button-pressed" : "plane-Button"
                        }
                        onClick={handleM}
                    ></div>
                    <div
                        className={
                            control ? "plane-Button-pressed" : "plane-Button"
                        }
                        onClick={handleC}
                    ></div>
                    <div
                        className={
                            data ? "plane-Button-pressed" : "plane-Button"
                        }
                        onClick={handleD}
                    ></div>
                </div>
            </GraphContextProvider>
        </div>
    );
};

export default MainHeader;
