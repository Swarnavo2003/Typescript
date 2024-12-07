//! Function return type

function add(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(add(10, 20));

function greet(name: string): void {
  console.log(`Hi, ${name}`);
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
let combineFunction: (num1: number, num2: number) => number;

/*
combineFunction = add; //* valid
console.log(combineFunction(10, 20));

// combineFunction = greet //* invalid
*/

//! Function types & callbacks

type CB = (n: number) => void;
function addHandle(num1: number, num2: number, cb: CB) {
  const result = num1 + num2;
  cb(result);
}
addHandle(10, 20, (result: number) => {
  console.log(result);
});
