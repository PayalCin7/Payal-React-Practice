import React from "react";
import ReactDOM from "react-dom";

const toggleText = () => {
  visibility = !visibility;
  renderApp();
};
let visibility = false;
const renderApp = () => {
  const template = (
    <div>
      <button onClick={toggleText}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Hi! I am learning react JS!</p>
        </div>
      )}
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

renderApp();
