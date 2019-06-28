import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var template = (
  <div>
    <h1>Indecision app</h1>
    <p>This is come info</p>
    <ol>
      <li>Item One</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Payal",
  age: 26,
  location: "Ahmedabad"
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age : {user.age}</p>
    <p>Location : {user.location}</p>
  </div>
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot);