import React, { useContext, useState } from "react";
import { NodeContext } from "./contexts/nodeContext";
import Infotype from "./infotypeTemplate";
import { v4 as uuidv4 } from "uuid";
import InfotypeSelect from "./infotypeSelect";

const Content = () => {
    const { node } = useContext(NodeContext);
    const [selectedInfotype, setSelect]=useState('All');
    console.log(node);

    const contentList = node.map(infotype => {
        return (
            <div key={uuidv4()}>
                <Infotype infotype={infotype} selectedInfotype={selectedInfotype}/>
            </div>
        );
    });

    return (

            <div className="content-con">{contentList}</div>
    );
};

export default Content;
