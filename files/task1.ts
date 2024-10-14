interface Animal {
    name: string;
    legs: number;
    habitat?: string; 
    move(): void;
  }

  class Cat implements Animal {
    name: string;
    legs: number;
  
    constructor(name: string) {
      this.name = name;
      this.legs = 4;
    }
  
    move(): void {
      console.log(`${this.name} walks on ${this.legs} legs.`);
    }
  }
  

  class Bird implements Animal {
    name: string;
    legs: number;
    habitat: string; 
  
    constructor(name: string, habitat: string) {
      this.name = name;
      this.legs = 2;
      this.habitat = habitat;
    }
  
    move(): void {
      console.log(`${this.name} flies and has ${this.legs} legs.`);
    }
  }
  

  class Fish implements Animal {
    name: string;
    legs: number;
    habitat: string;
  
    constructor(name: string) {
      this.name = name;
      this.legs = 0;
      this.habitat = 'water';
    }
  
    move(): void {
      console.log(`${this.name} swims in the ${this.habitat}.`);
    }
  }
  
  const cat = new Cat("Tomik");
  cat.move();
  
  const bird = new Bird("Vorona", "sky");
  bird.move();
  
  const fish = new Fish("Fugu");
  fish.move();
  