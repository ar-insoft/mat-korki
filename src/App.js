import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Panel } from './mat_korki/Panel';

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
    </>
  );
}

export default App;
