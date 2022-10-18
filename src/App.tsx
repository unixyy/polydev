import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesDown} from "@fortawesome/free-solid-svg-icons";

import Polytech from './Components/Polytech/Polytech';
import Faces from "./Components/Faces/Faces";

function App() {

  return (
    <div className="App">
        <header className="App-header">
            <p className="App-title">Polydev</p>
            <FontAwesomeIcon icon={faAnglesDown} size={"lg"} className={"slider"} beatFade/>
        </header>
        <Faces />
        <Polytech />
    </div>
  );
}

export default App;
