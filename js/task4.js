"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.1;
    }
    pay() {
        console.log(`${this.name} has been paid their salary of ${this.salary}`);
    }
}
class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.2;
    }
    pay() {
        console.log(`${this.name} has been paid their salary of ${this.salary}`);
    }
}
const employees = [
    new Developer('Taras', 19, 1000000),
    new Developer('Vitaliy', 19, 50000),
    new Manager('Vadim', 54, 15),
    new Manager('Yana', 18, 1000000)
];
let totalAnnualBonus = 0;
for (const employee of employees) {
    totalAnnualBonus += employee.getAnnualBonus();
}
console.log(`Total annual bonuses: ${totalAnnualBonus}`);
for (const employee of employees) {
    if ("pay" in employee) {
        employee.pay();
    }
}
