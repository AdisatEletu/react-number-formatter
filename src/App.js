import React from 'react';
import './App.css';
import NumberFormatter from "./numberFormatter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className={"flex width-100 box-holder"}>
          <div className={"number-box mr-3"}>
            <NumberFormatter value={"1000000"}/>
          </div>
          <div className={"number-box"}>
            <NumberFormatter value={"10000"}/>
          </div>
        </div>
        <p>
          A simple react app to format numbers into a social media format.
        </p>
      </header>
    </div>
  );
}

export default App;
