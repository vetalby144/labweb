abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;
  
    constructor(name: string, age: number, salary: number) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
  
    abstract getAnnualBonus(): number;
  }
  
  interface Payable {
    pay(): void;
  }
  
  class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
      super(name, age, salary);
    }
  
    getAnnualBonus(): number {
      return this.salary * 0.1;
    }
  
    pay(): void {
      console.log(`${this.name} has been paid their salary of ${this.salary}`);
    }
  }
 
  class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
      super(name, age, salary);
    }

    getAnnualBonus(): number {
      return this.salary * 0.2;
    }

    pay(): void {
      console.log(`${this.name} has been paid their salary of ${this.salary}`);
    }
  }

  const employees: Employee[] = [
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
      (employee as Payable).pay();
    }
  }
  