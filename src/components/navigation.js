import { diagramData } from "./data/diagramData4";

const Navigation = diagram => {
    // //Handling a exception with if/else
    // let result;
    // if (diagram === "L0-A") {
    //     result = {
    //         objects: [{ caption: "Tetrate" }]
    //     };
    // } else {
    //     result = diagramData.find(({ diagramid }) => diagramid === diagram);
    // }

    const result = diagramData.find(({ diagramid }) => diagramid === diagram);

    return result;
};

export default Navigation;
