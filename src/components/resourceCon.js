import React, { useContext, useState } from 'react';
import { InfoContext } from './contexts/infoContext';
import { ResourceContext } from './contexts/resourceContext';
import InfoCard from './infoCard';

const ResourceBar = () => {

    const {resType}= useContext(InfoContext);
    const {res} = useContext(ResourceContext);
    let cards;
    if(resType ==="All"){
        cards = res;
    }else {
        cards = resType;
    }

    let navData = cards.map( nav=> {
        return (
            <InfoCard nav={nav} />
            
        );
    })

    return ( 
        <div className="content-con">{navData}</div>
     );
}
 
export default ResourceBar;