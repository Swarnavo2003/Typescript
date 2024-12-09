//! Type Guards
/*
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  //* add type guards
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add("Swarnavo", " Majumder"));
console.log(add(10, 20));
*/
//! 2. Type Guard in objects
/*
type Admin = {
  name: string;
  privilages: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const emp1: ElevatedEmployee = {
  name: "Swarnavo",
  privilages: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  
  if ("privilages" in emp) {
    console.log(`Privilages: ${emp.privilages}`);
  }
  
  if ("startDate" in emp) {
    console.log(`startDate: ${emp.startDate.toLocaleDateString()}`);
  }
}
printEmployeeInformation(emp1);
printEmployeeInformation({
  name: "Aman",
  startDate: new Date(),
});
*/
//! 3. Type Guards in class
/*
class Car {
  drive() {
    console.log("Driving a car");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck");
  }
  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
}
useVehicle(v1);
useVehicle(v2);
*/
//! Type casting / Type assertion
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
var userInput = document.getElementById("user-input");
userInput.value = "Hi there";
