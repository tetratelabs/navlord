import React from "react";
import MainHeader from "./components/mainHeader";
import Content from "./components/content";
import NodeContextProvider from "./components/contexts/nodeContext";

function App() {
  return (
    <div className="App">
      <NodeContextProvider>
        <MainHeader />
        <Content />
      </NodeContextProvider>
    </div>
  );
}

export default App;
