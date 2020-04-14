import React, { useState, useContext } from "react";
import { NodeContext } from "./contexts/nodeContext";
import { GraphContext } from "./contexts/graphContext";

const Istio = ({ node }) => {
    const {setDraw1, draw1, setDraw2} = useContext(GraphContext);
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
        setDraw1(!draw1);
        setDraw2(false);
    };

    const { setNode } = useContext(NodeContext);
    const handleClick=()=> {
        setNode(node.infotypes);
        setDraw2(true);
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="64"
            className="Istio"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={handleClick}
        >
            <path
                d="M154 64H4a4 4 0 01-4-4V4a4 4 0 014-4h102.28a12.374 12.374 0 004.807 7.14A15.088 15.088 0 00120 10a15.086 15.086 0 008.913-2.86A12.374 12.374 0 00133.72 0H154a4 4 0 014 4v14.01a11.88 11.88 0 00-8.5 4.276A14.856 14.856 0 00146 32a14.856 14.856 0 003.5 9.714 11.882 11.882 0 008.5 4.276V60a4 4 0 01-4 4z"
                fill={hover?"#430C60":"#fff"}
            />
            <text
                transform="translate(54 40)"
                fontSize="29"
                fontFamily="NeueHaasDisplay-XThin, Neue Haas Grotesk Display Pro"
                fontWeight="bold"
                fill={hover?"#fff":"000"}
            >
                <tspan x="0" y="0">
                    {node.caption}
                </tspan>
            </text>
        </svg>
    );
};

export default Istio;
