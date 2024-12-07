"use strict";
//! Basic Class
/*
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = {
  name: "Dummy",
  describe: accounting.describe,
};
accountingCopy.describe();
*/
//! Access Modifiers - Public Private
/*
class Department {
  public name: string = "";
  private employee: string[];

  constructor(name: string) {
    this.name = name;
    this.employee = [];
  }

  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }

  addEmployee(emp: string) {
    this.employee.push(emp);
  }

  printEmployeeInfo() {
    console.log("Number of employee: ", this.employee.length);
    console.log(this.employee);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

accounting.addEmployee("Swarnavo");
accounting.addEmployee("Nilasha");
accounting.printEmployeeInfo();

// accounting.employee = ["xyz"]; //? Can not access outside because private
accounting.printEmployeeInfo();
*/
//! Readonly access modifier
/*
class Department {
  public name: string = "";
  protected employee: string[];
  private readonly id: string;

  constructor(id: string, n: string) {
    this.name = n;
    this.id = id; //* can initialize only once
    this.employee = [];
  }

  describe(this: Department) {
    console.log(`Department (${this.id}, ${this.name})`);
  }

  addEmployee(emp: string) {
    this.employee.push(emp);
  }

  printEmployeeInfo() {
    console.log("Number of employee: ", this.employee.length);
    console.log(this.employee);
  }
}

//! Inheritance
//! Override Properties & protected access modifier
//! setter and getter methods
class AccountingDepartment extends Department {
  // private reports: string[] = [];

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(emp: string): void {
    if (emp === "Swarnavo") {
      return;
    }
    this.employee.push(emp);
  }

  get getReports() {
    if (this.reports.length > 0) {
      return this.reports;
    }
    throw new Error("Report not found");
  }

  set setReport(value: string) {
    if (!value) {
      throw new Error("Please pass valid value");
    }
    this.reports.push(value);
  }
}

const accDep = new AccountingDepartment("d1", []);

accDep.addReports("Bugs");
accDep.printReports();
accDep.describe();

accDep.addEmployee("Swarnavo");
accDep.addEmployee("Kyojin");
accDep.printEmployeeInfo();

// setter and getter
console.log("getter", accDep.getReports);
accDep.setReport = "Code review error";
console.log("getter", accDep.getReports);
*/
//! statis method
class Department2 {
    constructor(id, n) {
        this.name = "";
        this.name = n;
        this.id = id; //* can initialize only once
        this.employee = [];
    }
    describe() {
        console.log(`Department (${this.id}, ${this.name})`);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployeeInfo() {
        console.log("Number of employee: ", this.employee.length);
        console.log(this.employee);
    }
    static getSalary() {
        return { salary: 500000 };
    }
}
const salary = Department2.getSalary(); // can access without creating object
console.log(salary);
//! Abstract classes
class Department3 {
    constructor(id, n) {
        this.employee = [];
        this.id = id;
        this.name = n;
    }
}
class Subclass extends Department3 {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    describe() {
        console.log(`Depatment ${this.id}`);
    }
    displayName() {
        console.log(this.name);
    }
}
const subClass = new Subclass("D1", []);
subClass.describe();
subClass.displayName();
