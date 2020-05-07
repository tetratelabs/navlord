import React, { useContext } from "react";
import { NodeContext } from "./contexts/nodeContext";
import { GraphContext } from "./contexts/graphContext";

const Hotspot = ({ node }) => {
    const { setDraw1, draw1, setDraw2 } = useContext(GraphContext);
    const { setNode } = useContext(NodeContext);

    const handleHover=()=> {
        setDraw1(!draw1);
        setDraw2(false);
    }

    const handleClick = () => {
        setNode(node.infotypes);
        setDraw2(true);
    };

    return (
        <div
            className="navLink"
            onClick={handleClick}
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover}
        >
            {node.caption}
        </div>
    );
};

export default Hotspot;
