import React, {useState, createContext} from 'react';

export const InfoContext = createContext();

const InfoContextProvider = (props) => {
     const [resType, setResType] = useState("All");

     const addResType = (res, type)=> {
         let results;
         if (type !== "All") {
            results = res.filter(content => 
                content.infotype === type
            )
         }else {
             results = res;
         }
    
        setResType(results);
     }

    return ( 
        <InfoContext.Provider value = {{resType, addResType}}>
            {props.children}
        </InfoContext.Provider>
     );
}
 
export default InfoContextProvider;