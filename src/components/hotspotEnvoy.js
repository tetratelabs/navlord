import React, { useState, useContext } from "react";
import { NodeContext } from "./contexts/nodeContext";
import { GraphContext } from "./contexts/graphContext";

const Envoy = ({ node }) => {
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
            width="164"
            height="64"
            className="Envoy"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={handleClick}
        >
            <path
                d="M147.326 64h-131a4 4 0 01-4-4V44c-.1 0-.214.005-.325.005a11.924 11.924 0 01-8.486-3.515A11.922 11.922 0 010 32a11.921 11.921 0 013.515-8.486A11.924 11.924 0 0112 20c.1 0 .208 0 .325.005v-16a4.005 4.005 0 014-4h20.281a12.372 12.372 0 004.806 7.14 15.087 15.087 0 008.914 2.86 15.086 15.086 0 008.913-2.86 12.375 12.375 0 004.807-7.14h95.279a4.005 4.005 0 014 4v44a15.893 15.893 0 01-4.687 11.313A15.9 15.9 0 01147.326 64z"
                fill={hover?"#430C60":"#fff"}
            />
            <text
                transform="translate(43.327 42)"
                fontSize="26"
                fill={hover?"#fff":"000"}
            >
                <tspan x="0" y="0">
                    {node.caption}
                </tspan>
            </text>
        </svg>
    );
};

export default Envoy;
