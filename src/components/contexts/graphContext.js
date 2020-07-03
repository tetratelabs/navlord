import React, {useState, createContext} from 'react';

export const GraphContext = createContext();

const GraphContextProvider = (props) => {
    const [draw1, setDraw1]= useState(false);
    const [draw2, setDraw2]=useState(false);
    const [draw3, setDraw3]=useState(false);

    return ( 
        <GraphContext.Provider value = {{draw1, draw2, setDraw1, setDraw2, draw3, setDraw3}}>
            {props.children}
        </GraphContext.Provider>
     );
}
 
export default GraphContextProvider;