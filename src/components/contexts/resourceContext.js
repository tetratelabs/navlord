import React, {useState, createContext} from 'react'; 
import { diagramData } from "../data/diagramData5";

export const ResourceContext = createContext();

const ResourceContextProvider = (props) => {
     const [res, setRes] = useState(diagramData);
     console.log(res);

     const addRes = (type)=> {
        let results = diagramData.filter(content => 
            content.nodetype === type
        )
    
        setRes(results);
     }

    return ( 
        <ResourceContext.Provider value = {{res, addRes, setRes}}>
            {props.children}
        </ResourceContext.Provider>
     );
}
 
export default ResourceContextProvider;