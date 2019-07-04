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
const fullName = "Payal Maradiya";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName);
