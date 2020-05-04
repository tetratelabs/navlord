import React, { useState } from "react";
import Navigation from "./navigation";
import { v4 as uuidv4 } from "uuid";
import MapHotspots from "./mapHotspots";
import Illustration from "./illustration";
import GraphContextProvider from "./contexts/graphContext";
import Grid from "./grid";

const MainHeader = () => {
    const [diagram, setDiagram] = useState("L0-A");

    const [manage, setManage] = useState(false);
    const [control, setControl] = useState(false);
    const [data, setData] = useState(false);

    const [grid, setGrid] = useState('grid1');

    const handleM = () => {
        if (diagram !== "L1-M") {
            setDiagram("L1-M");
        } else {
            setDiagram("L0-A");
        }

        setManage(!manage);
        setControl(false);
        setData(false);
        setGrid('grid1');
    };

    const handleC = () => {
        if (diagram !== "L1-C") {
            setDiagram("L1-C");
        } else {
            setDiagram("L0-A");
        }

        setControl(!control);
        setManage(false);
        setData(false);
        setGrid('grid2');
    };

    const handleD = () => {
        if (diagram !== "L1-D") {
            setDiagram("L1-D");
        } else {
            setDiagram("L0-A");
        }

        setData(!data);
        setManage(false);
        setControl(false);
        setGrid('grid3');
    };

    let navData = Navigation(diagram);

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
