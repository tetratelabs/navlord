import React from 'react';
import Hotspot from './hotspot';
import TSB from './hotspotTSB';
import Istio from './hotspotIstio';
import Envoy from './hotspotEnvoy';


const MapHotspots = ({node}) => {
    let hotspot;

    switch (node.caption) {
        case "Tetrate Service Bridge":
            hotspot = <TSB node={node}/>;
            break;

        case "Istio":
            hotspot = <Istio node={node}/>;
            break;

        case "Envoy":
            hotspot = <Envoy node={node}/>;
            break;
    
        default:
            hotspot = <Hotspot node={node}/>;
            break;
    }

    return ( 
        <div>
            {hotspot}
        </div> 
    );
} 
 
export default MapHotspots;