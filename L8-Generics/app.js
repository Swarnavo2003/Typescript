//! Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
type Person = {
  name: string;
  age: number;
};

const Boy: Person = {
  name: "Ritam",
  age: 18,
};

let fruits: Array<Person | string> = [{ name: "Sohom", age: 19 }];
// fruits.push("Mango");
// fruits.push("Banana");
// fruits.push("Apple");
console.log(fruits);
*/
//! Example 2:
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
var res = merge({ name: "Swarnavo" }, { role: "Software Engineer" }, { id: "d1" });
// console.log(res);
//! Generic Constrants
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
var numberBox = { value: 200 };
var stringBox = { value: "Kyojin" };
var objectBox = { value: { name: "Swarnavo", age: 21 } };
var response = { data: "Success", status: 200 }; //* Default string
var jsonResponse = {
    data: { name: "value", age: 21 },
    status: 500,
};
// console.log(response);
// console.log(jsonResponse);
//! Generic with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
// console.log(stringContainer.getContent());
var numberContainer = new Container(21);
// console.log(numberContainer.getContent());
//! Generic with Array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4, 5]);
// console.log(firstNumber);
var firstString = getFirst(["a", "b", "c", "d", "e"]);
// console.log(firstString);
//! Generic with keyof
var Person = { name: "Mernstack" };
function getProperty(obj, key) {
    return obj[key];
}
var person1 = { name: "Swarnavo", age: 21 };
var person2 = { fullName: "Kyojin", salary: 50000 };
var firstName = getProperty(person1, "name");
var age = getProperty(person1, "age");
var salary = getProperty(person2, "salary");
console.log(firstName, age, salary);
