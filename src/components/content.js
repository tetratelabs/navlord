import React, {useContext} from "react";
import { NodeContext } from "./contexts/nodeContext";
import Infotype from "./infotypeTemplate";
import { v4 as uuidv4 } from "uuid";

const Content = () => {
    const {node} = useContext(NodeContext);

    const contentList = node.map(infotype=> {
        return(
            <div key={uuidv4()}>
                <Infotype infotype={infotype}/>
            </div>
        )
    })

 return(
     <div className="content-con">
         {contentList}
     </div>
 )
};

export default Content;
