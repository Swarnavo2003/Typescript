//! unknown, any return type
var userInput;
// let userInput: any;
var userName;
userInput = 20;
userName = "Swarnavo";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
//! never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal Server Error", 500);
console.log(res);
