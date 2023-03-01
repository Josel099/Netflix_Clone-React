import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import {action,orginals} from "./Components/constants/urls";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Rowpost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
