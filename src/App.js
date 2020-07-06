import React from "react";
import MainHeader from "./components/mainHeader";
// import {BrowserRouter,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Route exact path="/build-react-library" component={MainHeader} />
      </BrowserRouter> */}
      <MainHeader />
        
    </div>
  );
}

export default App;
