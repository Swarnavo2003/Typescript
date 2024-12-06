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
function combine(num1, num2, conversionType) {
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-number") {
        return Number(num1) + Number(num2);
    }
    else {
        return "".concat(num1.toString(), " ").concat(num2.toString());
    }
}
var user = {
    name: "Swarnavo",
    age: 21,
    skills: ["React", "Node"],
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name));
}
greet(user);
