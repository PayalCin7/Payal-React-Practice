import React from "react";
import ReactDOM from "react-dom";

//In let You can't able to Redefine the variable.
let nameLet = "Payal";
nameLet = "krisha";
console.log("NameLet", nameLet);

//You can't able to override value of const.
const nameConst = "Payal";
console.log("NameConst", nameConst);

function getPetName() {
  var petName = "Payu";
  return petName;
}

const petName = getPetName();
console.log(petName);

//Block Scoping
var fullName = "PAyal Maradiya";
let firstName;
if (fullName) {
  let firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName);
