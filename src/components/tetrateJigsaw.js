import React, { useState, useContext } from "react";
import { GraphContext } from "./contexts/graphContext";
import InfoContextProvider from "./contexts/infoContext";
import InfotypeBar from "./infotypeCon";
import ResourceBar from "./resourceCon";
import { ResourceContext } from "./contexts/resourceContext";
import refresh from "../assets/refresh.svg";
import { diagramData } from "./data/diagramData5";

const Jigsaw = ({grid}) => {

    const {addRes, setRes} = useContext(ResourceContext);
    const [manage, setManage]= useState(false);
    const [control, setControl]= useState(false);
    const [data, setData]= useState(false);

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const { setDraw1, setDraw2, setDraw3 } = useContext(GraphContext);

    const handleClick1 = () => {
        addRes ("Envoy");
        setDraw3(false);
        setDraw2(false);
        setDraw1(true);
        grid('grid3');
        
        setManage(false);
        setControl(false);
        setData(true);
    };

    const handleClick2 = () => {
        addRes ("Istio");
        setDraw3(false);
        setDraw2(true);
        setDraw1(true);
        grid('grid2');

        setManage(false);
        setControl(true);
        setData(false);
    };

    const handleClick3 = () => {
        addRes ("Tetrate");
        setDraw3(true);
        setDraw2(true);
        setDraw1(true);
        grid('grid1');

        setManage(true);
        setControl(false);
        setData(false);
    };

    const handleHover1 = () => {
        setHover1(!hover1);
    };

    const handleHover2 = () => {
        setHover2(!hover2);
    };

    const handleHover3 = () => {
        setHover3(!hover3);
    };

    const handleReset = ()=> {

        setManage(false);
        setControl(false);
        setData(false);

        setDraw3(false);
        setDraw2(false);
        setDraw1(false);

        setRes (diagramData);
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="341" height="285">
                <path
                    d="M163.06 191.999h-31.062a15.893 15.893 0 01-11.313-4.687 15.893 15.893 0 01-4.687-11.313v-26a8.008 8.008 0 008-8 8.009 8.009 0 00-8-8v-18a15.891 15.891 0 014.687-11.313 15.893 15.893 0 0111.313-4.687h79a15.893 15.893 0 0111.313 4.687 15.891 15.891 0 014.687 11.313v20a8.008 8.008 0 00-8 8 8.009 8.009 0 008 8v24a15.893 15.893 0 01-4.687 11.313 15.893 15.893 0 01-11.313 4.687h-32.062a8.007 8.007 0 00-7.937-7 8.009 8.009 0 00-7.939 7z"
                    fill={hover1||data ? "#ff590d" : "#FFF6E9"}
                    className="envoy"
                    onMouseEnter={handleHover1}
                    onMouseLeave={handleHover1}
                    onClick={handleClick1}
                />
                <text
                    transform="translate(137.998 151.999)"
                    fill={hover1||data ? "#f8f8f8" : "#2b2b2b"}
                    fontSize="24"
                    fontFamily="HelveticaNeue, Helvetica Neue"
                    pointerEvents="none"
                >
                    <tspan x="0" y="0">
                        Envoy
                    </tspan>
                </text>
                <path
                    d="M178.936 234.999a8.578 8.578 0 00.061-1 8.01 8.01 0 00-8-8 8.012 8.012 0 00-8 8 8.5 8.5 0 00.061 1H79.996a15.9 15.9 0 01-11.312-4.687 15.9 15.9 0 01-4.688-11.313v-70a8.009 8.009 0 008-8 8.008 8.008 0 00-8-8v-61a15.9 15.9 0 014.688-11.314 15.9 15.9 0 0111.312-4.686h182a15.9 15.9 0 0111.312 4.686 15.887 15.887 0 014.688 11.314v63.062a7.961 7.961 0 00-1-.063 8.01 8.01 0 00-8 8 8.007 8.007 0 008 8 8.059 8.059 0 001-.061v68.062a15.887 15.887 0 01-4.688 11.314 15.9 15.9 0 01-11.312 4.686zm39.36-36.129a15.9 15.9 0 0011.312-4.684 15.9 15.9 0 004.688-11.316v-30.9a8 8 0 01-7.3-7.971 8 8 0 017.3-7.971v-27.9a15.9 15.9 0 00-4.688-11.314 15.892 15.892 0 00-11.312-4.686h-94.6a15.892 15.892 0 00-11.312 4.686 15.9 15.9 0 00-4.688 11.314v25.876q.149-.006.3-.006a8 8 0 018 8 8 8 0 01-8 8q-.15 0-.3-.005v32.876a15.9 15.9 0 004.688 11.316 15.9 15.9 0 0011.312 4.684h39.3a8 8 0 018-7.871 8 8 0 018 7.871z"
                    fill={hover2||control ? "#ff590d" : "#FFF6E9"}
                    className="istio"
                    onMouseEnter={handleHover2}
                    onMouseLeave={handleHover2}
                    onClick={handleClick2}
                />
                <text
                    transform="translate(148.998 82.999)"
                    fill={hover2||control ? "#f8f8f8" : "#2b2b2b"}
                    fontSize="24"
                    fontFamily="HelveticaNeue, Helvetica Neue"
                    pointerEvents="none"
                >
                    <tspan x="0" y="0">
                        Istio
                    </tspan>
                </text>
                <path
                    d="M15.999 284.999a15.9 15.9 0 01-11.315-4.688 15.893 15.893 0 01-4.685-11.312v-253A15.9 15.9 0 014.684 4.686 15.9 15.9 0 0115.999-.001h309a15.887 15.887 0 0111.311 4.686 15.891 15.891 0 014.689 11.314v253a15.889 15.889 0 01-4.688 11.311 15.889 15.889 0 01-11.312 4.689zm253.374-43.967a15.9 15.9 0 0011.313-4.687 15.9 15.9 0 004.688-11.313v-74.043q-.187.009-.377.009a8 8 0 01-8-8 8 8 0 018-8q.19 0 .377.009V66.345a15.9 15.9 0 00-4.688-11.315 15.9 15.9 0 00-11.313-4.684H71.622a15.9 15.9 0 00-11.313 4.684 15.905 15.905 0 00-4.687 11.315v66.662c.125-.005.249-.008.375-.008a8 8 0 018 8 8 8 0 01-8 8c-.125 0-.25 0-.375-.008v76.043a15.9 15.9 0 004.687 11.313 15.9 15.9 0 0011.313 4.687h91.434a8 8 0 017.943-7.035 8 8 0 017.941 7.035z"
                    fill={hover3||manage ? "#ff590d" : "#FFF6E9"}
                    className="tsb"
                    onMouseEnter={handleHover3}
                    onMouseLeave={handleHover3}
                    onClick={handleClick3}
                />
                <text
                    transform="translate(52.998 33.999)"
                    fill={hover3||manage ? "#f8f8f8" : "#2b2b2b"}
                    fontSize="24"
                    fontFamily="HelveticaNeue, Helvetica Neue"
                    pointerEvents="none"
                >
                    <tspan x="0" y="0">
                        Tetrate Service Bridge
                    </tspan>
                </text>
            </svg>

            <h1 className={manage||control||data? "app-name-off":"app-name"}>
                Tetrate Library 
            </h1>

            <button className={manage||control||data? "reset":"reset-off"} onClick={handleReset}>
                <img src={refresh} alt="Refresh icon" />
            </button>

            <InfoContextProvider>
                <InfotypeBar />
                <ResourceBar />
           </InfoContextProvider> 
           
        </div>
    );
};

export default Jigsaw;
