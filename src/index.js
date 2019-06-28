import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import nameVar from "./playground/es6-let-const";

console.log(nameVar);

var app = {
  name: "Indecision App",
  description: "Put your life in the hand of computer",
  options: ["one", "two"]
};

var template = (
  <div>
    <h1>{app.name}</h1>
    {app.description && <p>{app.description}</p>}
    <p>{app.options.length > 0 ? "Here is your options" : "No Options"}</p>
    <ol>
      <li>Item One</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Payal",
  age: 23,
  location: "Ahmedabad"
};
function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age > 28 && <p>Age : {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot);
