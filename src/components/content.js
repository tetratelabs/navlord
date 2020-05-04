import React, { useContext, useState } from "react";
import { NodeContext } from "./contexts/nodeContext";
import Infotype from "./infotypeTemplate";
import { v4 as uuidv4 } from "uuid";
import InfotypeSelect from "./infotypeSelect";

const Content = () => {
    const { node } = useContext(NodeContext);
    const [selectedInfotype, setSelect]=useState('All');

    const contentList = node.map(infotype => {
        return (
            <div key={uuidv4()}>
                <Infotype infotype={infotype} selectedInfotype={selectedInfotype}/>
            </div>
        );
    });

    return (
        <div>
            {/* <div className="infotype-con">
                {node.map(type => {
                    return(
                        <div key={uuidv4()}>
                            <InfotypeSelect type={type} setSelect={setSelect}/>
                        </div>
                    );
                })}
            </div> */}

            <div className="content-con">{contentList}</div>
        </div>
    );
};

export default Content;
