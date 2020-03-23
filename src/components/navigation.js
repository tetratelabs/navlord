import { diagramData } from "./data/diagramData2";

const Navigation = diagramid => {
  const result = diagramData.find(({ diagramid }) => diagramid === diagramid);
  console.log(result);
  return result;
};

export default Navigation;
