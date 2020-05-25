import React, { useContext, useState } from "react";
import { NodeContext } from "./contexts/nodeContext";
import Infotype from "./infotypeTemplate";
import { v4 as uuidv4 } from "uuid";
import InfotypeSelect from "./infotypeSelect";

const Content = () => {
    const { node } = useContext(NodeContext);
    // const [selectedInfotype, setSelect]=useState('All');
    console.log(node);

    // const contentList = node.map(infotype => {
    //     return (
    //         <div key={uuidv4()}>
    //             <Infotype infotype={infotype} selectedInfotype={selectedInfotype}/>
    //         </div>
    //     );
    // });

    const contentList = node.map((nodes) => {
        return (
            <div className="infotype" key={uuidv4}>
            <div className="info-con" >
                <a
                    className="info"
                    href={nodes.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <div className="info-img">
                        <img src={Tetrate} alt="Tetrate logo" />
                    </div> */}
                    <div>
                        <h3 className="info-title">{nodes.title} </h3>
                        <p className="info-overview"> {nodes.overview}</p>
                    </div>
                </a>
            </div>
            </div>
        );
    });

    return <div className="content-con">{contentList}</div>;
};

export default Content;
