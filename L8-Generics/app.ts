//! Generics

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
function merge<T, U, S>(objA: T, objB: U, objC: S) {
  return { ...objA, ...objB, ...objC };
}
const res = merge(
  { name: "Swarnavo" },
  { role: "Software Engineer" },
  { id: "d1" }
);
// console.log(res);

//! Generic Constrants
function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}

const obj = createObject("age", 25, true);
// console.log(obj);

//! Generic Interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 200 };
const stringBox: Box<string> = { value: "Kyojin" };
const objectBox: Box<object> = { value: { name: "Swarnavo", age: 21 } };
// console.log(numberBox);
// console.log(stringBox);
// console.log(objectBox);

interface User<T = string> {
  data: T;
  status: number;
}

type Person2 = {
  name: string;
  age: number;
};

const response: User = { data: "Success", status: 200 }; //* Default string
const jsonResponse: User<Person2> = {
  data: { name: "value", age: 21 },
  status: 500,
};
// console.log(response);
// console.log(jsonResponse);

//! Generic with class
class Container<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}
const stringContainer = new Container<string>("Hello");
// console.log(stringContainer.getContent());

const numberContainer = new Container<number>(21);
// console.log(numberContainer.getContent());

//! Generic with Array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirst([1, 2, 3, 4, 5]);
// console.log(firstNumber);

const firstString = getFirst(["a", "b", "c", "d", "e"]);
// console.log(firstString);

//! Generic with keyof
const Person = { name: "Mernstack" };
function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}
const person1 = { name: "Swarnavo", age: 21 };
const person2 = { fullName: "Kyojin", salary: 50000 };
const firstName = getProperty(person1, "name");
const age = getProperty(person1, "age");
const salary = getProperty(person2, "salary");
console.log(firstName, age, salary);
