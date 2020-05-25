import React, {useState, createContext} from 'react';

export const NodeContext = createContext();

const NodeContextProvider = (props) => {
    const [node,setNode]=useState([]);

    const addNode = (nodes) => {
        setNode([...node, {nodes}])
    }

    return ( 
        <NodeContext.Provider value={{node,setNode}}>
            {props.children}
        </NodeContext.Provider>
     );
}
 
export default NodeContextProvider;
