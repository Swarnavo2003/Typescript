//! unknown, any return type

let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 20;
userName = "Swarnavo";

// userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}

//! never return type
function generateError(message: string, code: number): never {
  throw { message: message, statusCode: code };
}
const res = generateError("Internal Server Error", 500);
console.log(res);
