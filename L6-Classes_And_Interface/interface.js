"use strict";
//! Interface
/*
interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person;
user = {
  name: "Swarnavo",
  age: 21,
  greet(text): void {
    console.log(`${text} ${this.name}`);
  },
};
console.log(user);

user.greet("Hi there, I am");
*/
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(10, 20));
class Person {
    constructor(n) {
        this.name = n;
    }
}
