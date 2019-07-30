import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const app = {
  name: "Indecision App",
  description: "Put your life in the hand of computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
  }
  e.target.elements.option.value = "";
  renderApp();
};

const clearOption = () => {
  app.options = [];
  renderApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.name}</h1>
      {app.description && <p>{app.description}</p>}
      <p>{app.options.length > 0 ? "Here is your options" : "No Options"}</p>
      <button
        disabled={app.options.length > 0 ? false : true}
        onClick={onMakeDecision}
      >
        What should I do?
      </button>
      <button onClick={clearOption}>All Clear</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

renderApp();
