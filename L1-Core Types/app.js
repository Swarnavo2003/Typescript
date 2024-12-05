function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 20;
var n2 = 30;
var printResult = true;
var someText = "Sum of two numbers =";
// const ans = add(n1, n2, printResult, someText);
// console.log(ans);
add(n1, n2, printResult, someText);
