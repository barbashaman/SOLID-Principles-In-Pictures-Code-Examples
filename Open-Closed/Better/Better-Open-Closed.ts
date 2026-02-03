/**
 * BETTER Example for Open/Closed Principle
 * 
 * The system is:
 * - Open for extension (new shapes)
 * - Closed for modification (AreaCalculator never changes)
 * 
 * Why this respects Open/Closed Principle?
 * 
 * - Shapes implement a common interface
 * - AreaCalculator depends on Shape abstraction
 * - No if, no switch, no instanceof
 * - Adding a new shape requires no changes to existing code
 * - Behavior is extended via new implementations
 * 
 */

/**
 * Abstraction
 */
interface Shape {
    getArea(): number;
}

/**
 * Concrete implementations
 */
class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(public radius: number) {}

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Trapezium implements Shape {
    constructor(
        public a: number,
        public b: number,
        public height: number
    ) {}

    getArea(): number {
        return ((this.a + this.b) / 2) * this.height;
    }
}

class Triangle implements Shape {
    constructor(public base: number, public height: number) {}

    getArea(): number {
        return (this.base * this.height) / 2;
    }
}


/**
 * AreaCalculator depends on abstraction, not concretion
 * (Dependency Injection via method parameter)
 */
class AreaCalculator {

    calculateArea(shape: Shape): number {
        return shape.getArea();
    }
}

// Usage
const shapes: Shape[] = [
    new Rectangle(10, 5),
    new Circle(5),
    new Trapezium(10, 15, 8),
    new Triangle(10, 8)
];
const areaCalculator = new AreaCalculator();
shapes.forEach(shape => {
    console.log(`Area: ${areaCalculator.calculateArea(shape)}`);
});