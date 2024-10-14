abstract class Car {
    protected brand: string;
    protected model: string;
    private year: number;
    public color: string;
  
    constructor(brand: string, model: string, year: number, color: string) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    public displayInfo(): void {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
  }

  
  class Audi extends Car {
    private engineType: string;
  
    constructor(model: string, year: number, color: string, engineType: string) {
      super('Audi', model, year, color);
      this.engineType = engineType;
    }
  
    public displayInfo(): void {
      super.displayInfo();
      console.log(`Engine Type: ${this.engineType}`);
    }
  }
  
  class Mercedes extends Car {
    private luxuryLevel: string;
  
    constructor(model: string, year: number, color: string, luxuryLevel: string) {
      super('Mercedes', model, year, color);
      this.luxuryLevel = luxuryLevel;
    }
  
    public displayInfo(): void {
      super.displayInfo();
      console.log(`Luxury Level: ${this.luxuryLevel}`);
    }
  }
  
  class BMW extends Car {
    private performancePackage: boolean;
  
    constructor(model: string, year: number, color: string, performancePackage: boolean) {
      super('BMW', model, year, color);
      this.performancePackage = performancePackage;
    }
  
    public displayInfo(): void {
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
  