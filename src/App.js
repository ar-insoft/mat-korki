import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Panel } from './mat_korki/Panel';
//import * as MathJaxExample from './mat_korki/MathJaxExample';
import MyMathJax from './mat_korki/MyMathJax';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>
          Marz-Korki
        </p>
          <img src={logo} className="App-logo" alt="logo" />
          <MyMathJax rownanie="$$f(x) = int_{-infty}^infty hat f(xi),e^{2 pi i xi x},dxi$$ $$ 1/3 $$" />
      </header>
    </div>
    <Panel />
      {/* {test()} */}{/* <MathJaxExample /> */}
    </>
  );
}

export default App;
