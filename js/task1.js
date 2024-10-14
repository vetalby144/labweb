"use strict";
class Cat {
    constructor(name) {
        this.name = name;
        this.legs = 4;
    }
    move() {
        console.log(`${this.name} walks on ${this.legs} legs.`);
    }
}
class Bird {
    constructor(name, habitat) {
        this.name = name;
        this.legs = 2;
        this.habitat = habitat;
    }
    move() {
        console.log(`${this.name} flies and has ${this.legs} legs.`);
    }
}
class Fish {
    constructor(name) {
        this.name = name;
        this.legs = 0;
        this.habitat = 'water';
    }
    move() {
        console.log(`${this.name} swims in the ${this.habitat}.`);
    }
}
const cat = new Cat("Tomik");
cat.move();
const bird = new Bird("Vorona", "sky");
bird.move();
const fish = new Fish("Fugu");
fish.move();
