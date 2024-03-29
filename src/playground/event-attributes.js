import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const resetCount = () => {
  count = 0;
  renderCounterApp();
};
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
  var appRoot = document.getElementById("app");
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
