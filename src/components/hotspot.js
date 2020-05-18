import React, { useContext } from "react";
import { NodeContext } from "./contexts/nodeContext";

const Hotspot = ({ node }) => {
    const { setNode } = useContext(NodeContext);

    const handleClick = () => {
        setNode(node.infotypes);
    };

    return (
        <div
            className="navLink"
            onClick={handleClick}
        >
            {node.caption}
        </div>
    );
};

export default Hotspot;
