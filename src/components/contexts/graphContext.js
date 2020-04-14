import React, {useState, createContext} from 'react';

export const GraphContext = createContext();

const GraphContextProvider = (props) => {
    const [draw1, setDraw1]= useState(false);
    const [draw2, setDraw2]=useState(false);

    return ( 
        <GraphContext.Provider value = {{draw1, draw2, setDraw1, setDraw2}}>
            {props.children}
        </GraphContext.Provider>
     );
}
 
export default GraphContextProvider;