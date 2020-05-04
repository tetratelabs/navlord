import React, {useState, useContext} from "react";
import { NodeContext } from "./contexts/nodeContext";
import { GraphContext } from "./contexts/graphContext";

const TSB = ({ node }) => {
    const {setDraw1, draw1, setDraw2} = useContext(GraphContext);
    
    const [hover, setHover]= useState(false);

    const handleHover = ()=> {
        setHover(!hover);
        setDraw1(!draw1);
        setDraw2(false);
    }

    const { setNode } = useContext(NodeContext);
    const handleClick=()=> {
        setNode(node.infotypes);
        setDraw2(true);
    }

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="312" 
            height="142"
            className="TSB"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={handleClick}
            >

            <path
                d="M187.166 132h-55.333A12 12 0 01120 142a12 12 0 01-11.834-10H4a4 4 0 01-4-4V16A16 16 0 0116 0h280a16 16 0 0116 16v112a4 4 0 01-4 4h-97.166A12 12 0 01199 142a12 12 0 01-11.834-10z"
                fill={hover?"#430C60":"#fff"}
            />

            <text
                transform="translate(28 76)"
                fontSize="26"
                fill={hover?"#fff":"000"}
            >
                <tspan x="0" y="0" >
                    {node.caption}
                </tspan>
            </text>

        </svg>
    );
};

export default TSB;
