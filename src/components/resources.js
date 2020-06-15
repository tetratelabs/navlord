import { diagramData } from "./data/diagramData5";

const Resources = (type)=> {
    let results = diagramData.filter(content => 
        content.nodetype === type
    )

    return results;
     
}

export default Resources;