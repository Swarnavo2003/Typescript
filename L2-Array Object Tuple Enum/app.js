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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person = {
    name: "Swarnavo",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air"],
    role: Role.AUTHOR,
};
if (person.role === Role.AUTHOR) {
    console.log("AUTHOR");
}
else if (person.role === Role.ADMIN) {
    console.log("ADMIN");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
