//! Union
/* 
function combine(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return `${num1.toString()} ${num2.toString()}`;
}
}
console.log(combine(10, 20));
console.log(combine("Swarnavo", "Majumder"));
*/

//! Literal Types
/* 
function combine(
  num1: number | string,
  num2: number | string,
  conversionType: "as-number" | "as-string"
) {
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    return Number(num1) + Number(num2);
  } else {
    return `${num1.toString()} ${num2.toString()}`;
  }
}
console.log(combine(10, 20, "as-number"));
console.log(combine("Swarnavo", "Majumder", "as-string"));
*/

// Type Alias/Custom Types
type Combinable = number | string;
type ConversionType = "as-number" | "as-string";
function combine(
  num1: Combinable,
  num2: Combinable,
  conversionType: ConversionType
) {
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    return Number(num1) + Number(num2);
  } else {
    return `${num1.toString()} ${num2.toString()}`;
  }
}
// console.log(combine(10, 20, "as-number"));
// console.log(combine("Swarnavo", "Majumder", "as-string"));

//? Example:
type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Swarnavo",
  age: 21,
  skills: ["React", "Node"],
};

function greet(user: User) {
  console.log(`Hi, I am ${user.name}`);
}
greet(user);
