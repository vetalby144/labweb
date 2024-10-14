interface Shape {
    getArea(): number;
    getPerimeter(): number;
  }

  class Circle implements Shape {
    constructor(private radius: number) {}
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  
    getPerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  
    scale(factor: number): void {
      this.radius *= factor;
    }
  }

  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  
    scale(factor: number): void {
      this.width *= factor;
      this.height *= factor;
    }
  }

  class Triangle implements Shape {
    constructor(private a: number, private b: number, private c: number) {}
  
    getArea(): number {
      const s = (this.a + this.b + this.c) / 2;
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
  
    getPerimeter(): number {
      return this.a + this.b + this.c;
    }
  
    scale(factor: number): void {
      this.a *= factor;
      this.b *= factor;
      this.c *= factor;
    }
  }

  const shapes: Shape[] = [
    new Circle(10),
    new Rectangle(5, 3),
    new Triangle(5, 5, 5)
  ];
  
  let totalArea = 0;
  let totalPerimeter = 0;
  
  for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
  }
  
  console.log(`Area: ${totalArea}`);
  console.log(`Perimeter: ${totalPerimeter}`);
  