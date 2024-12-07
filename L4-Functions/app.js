//! Function return type
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(10, 20));
function greet(name) {
    console.log("Hi, ".concat(name));
}
// greet("Swarnavo");
/*

let combineFunction: Function; //? Assigning type function

// combineFunction = 10 //* invalid
// combineFunction = "Swarnavo" //* invalid

combineFunction = add; //* valid
console.log(combineFunction(1, 2));

combineFunction = greet; //* valid
combineFunction("Swarnavo");

*/
//! Good Practices
var combineFunction;
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
