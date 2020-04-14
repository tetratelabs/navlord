import React, { useState } from "react";
import Navigation from "./navigation";
import { v4 as uuidv4 } from "uuid";
import MapHotspots from "./mapHotspots";
import Illustration from "./illustration";
import GraphContextProvider from "./contexts/graphContext";

const MainHeader = () => {
    const [diagram, setDiagram] = useState("L0-A");

    const [manage, setManage] = useState(false);
    const [control, setControl] = useState(false);
    const [data, setData] = useState(false);

    const handleM = () => {
        if (diagram !== "L1-M") {
            setDiagram("L1-M");
        } else {
            setDiagram("L0-A");
        }

        setManage(!manage);
        setControl(false);
        setData(false);
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
                <div className="illustration">
                    <Illustration />
                    {hotspots}
                </div>
                <div className="plane-Button-Con">
                    <div
                        className={
                            manage ? "plane-Button-pressed" : "plane-Button"
                        }
                        onClick={handleM}
                    >
                        Management Plane
                    </div>
                    <div
                        className={
                            control ? "plane-Button-pressed" : "plane-Button"
                        }
                        onClick={handleC}
                    >
                        Control Plane
                    </div>
                    <div
                        className={
                            data ? "plane-Button-pressed" : "plane-Button"
                        }
                        onClick={handleD}
                    >
                        Data Plane
                    </div>
                </div>
            </GraphContextProvider>
        </div>
    );
};

export default MainHeader;
