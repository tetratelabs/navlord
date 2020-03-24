import React, {useState, createContext} from 'react';

export const NodeContext = createContext();

const NodeContextProvider = (props) => {
    const [node,setNode]=useState([]);
    console.log(node);

    return ( 
        <NodeContext.Provider value={{node,setNode}}>
            {props.children}
        </NodeContext.Provider>
     );
}
 
export default NodeContextProvider;
