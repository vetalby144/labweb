"use strict";
class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
}
class Audi extends Car {
    constructor(model, year, color, engineType) {
        super('Audi', model, year, color);
        this.engineType = engineType;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Engine Type: ${this.engineType}`);
    }
}
class Mercedes extends Car {
    constructor(model, year, color, luxuryLevel) {
        super('Mercedes', model, year, color);
        this.luxuryLevel = luxuryLevel;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Luxury Level: ${this.luxuryLevel}`);
    }
}
class BMW extends Car {
    constructor(model, year, color, performancePackage) {
        super('BMW', model, year, color);
        this.performancePackage = performancePackage;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Performance Package: ${this.performancePackage ? 'Yes' : 'No'}`);
    }
}
const bmwM5 = new BMW('M5', 2020, 'Blue', true);
const bmw740 = new BMW('740', 2021, 'Black', false);
const mercedesCClass = new Mercedes('C-Class', 2019, 'White', 'Medium');
const mercedesCLS = new Mercedes('CLS', 2022, 'Silver', 'High');
const audiA6 = new Audi('A6', 2021, 'Red', 'V8');
const audiRS6 = new Audi('RS6', 2023, 'Gray', 'V6');
bmwM5.displayInfo();
bmw740.displayInfo();
mercedesCClass.displayInfo();
mercedesCLS.displayInfo();
audiA6.displayInfo();
audiRS6.displayInfo();
