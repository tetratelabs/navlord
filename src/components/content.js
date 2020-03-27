import React, { useContext } from "react";
import { NodeContext } from "./contexts/nodeContext";
import Infotype from "./infotypeTemplate";
import { v4 as uuidv4 } from "uuid";
import InfotypeSelect from "./infotypeSelect";

const Content = () => {
    const { node } = useContext(NodeContext);

    const contentList = node.map(infotype => {
        return (
            <div key={uuidv4()}>
                <Infotype infotype={infotype} />
            </div>
        );
    });

    return (
        <div className="infotype-background">
            <div className="infotype-con">
                {node.map(type => {
                    return(
                        <div>
                            <InfotypeSelect type={type} />
                        </div>
                    );
                })}
            </div>

            <div className="content-con">{contentList}</div>
        </div>
    );
};

export default Content;
