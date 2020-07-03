import React, { useState, createContext, useEffect, useContext } from "react";
import { ResourceContext } from "./resourceContext";

export const InfoContext = createContext();

const InfoContextProvider = (props) => {
    const { res: resource } = useContext(ResourceContext);
    const [resType, setResType] = useState(resource);

    const [currentInfoType, setCurrentInfoType] = useState("All");
    useEffect(() => {
        setResType(() => {
            if (currentInfoType !== "All") {
                return resource.filter(
                    (content) => content.infotype === currentInfoType
                );
            }
            return resource;
        });
    }, [resource, currentInfoType]);

    const addResType = (res, type) => {
        let results;
        if (type !== "All") {
            results = res.filter((content) => content.infotype === type);
        } else {
            results = res;
        }
        // console.log(results);
        setCurrentInfoType(type);
        setResType(results);
    };
    return (
        <InfoContext.Provider value={{ resType, addResType }}>
            {props.children}
        </InfoContext.Provider>
    );
};
export default InfoContextProvider;
