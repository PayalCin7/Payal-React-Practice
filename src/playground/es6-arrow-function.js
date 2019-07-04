//Regular function
const square = function(x) {
  return x * x;
};

console.log(square(9));

// Regular Arrow function.
const fullName = "Mike smith";
const getFirstName = () => {
  return fullName.split(" ")[0];
};
console.log(getFirstName());

// Shorthand Arrow function for single line expression.

const getName = () => fullName.split(" ")[0];
console.log(getName());

const multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};
console.log(multiplier.multiply());

