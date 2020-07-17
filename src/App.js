import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Panel } from './mat_korki/Panel';
//import * as MathJaxExample from './mat_korki/MathJaxExample';
const test = require('./mat_korki/MathJaxExample');

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mat-Korki
        </p>
      </header>
    </div>
    <Panel />
  {test()}{/* <MathJaxExample /> */}
    </>
  );
}

export default App;
