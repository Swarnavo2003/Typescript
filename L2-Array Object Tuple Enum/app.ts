//! Object
/* 
const person: { firstName: string; age: number; xyz: { address: string } } = {
  firstName: "Swarnavo",
  age: 21,
  xyz: {
    address: "Kolkats",
  },
};
*/

//! Array
/* 
const person: { firstName: string; age: number; skills: string[] } = {
  firstName: "Swarnavo",
  age: 21,
  skills: ["Reactjs", "Nodejs"],
};

let favouriteLanguage1: string[];
favouriteLanguage1 = ["JavaScript", "Golang", "Java"];

let favouriteLanguage2: any[]; //* loses ts power
favouriteLanguage2 = ["JavaScript", 21, true];

//* console.log(person);
*/

//! Tuple
/* 
const person: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; //* fixed array of two types
} = {
  name: "Swarnavo",
  age: 21,
  skills: ["React", "Node"],
  product: [10, "Macbook M2"],
};
console.log(person.product);
*/

//! Enums
enum Role {
  ADMIN,
  AUTHOR,
  READ_USER_ONLY,
}
const person = {
  name: "Swarnavo",
  age: 21,
  skills: ["React", "Node"],
  product: [10, "Macbook Air"],
  role: Role.AUTHOR,
};

if (person.role === Role.AUTHOR) {
  console.log("AUTHOR");
} else if (person.role === Role.ADMIN) {
  console.log("ADMIN");
} else if (person.role === Role.READ_USER_ONLY) {
  console.log("read user only");
}
