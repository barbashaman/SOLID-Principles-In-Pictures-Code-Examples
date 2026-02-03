/**
 * BAD Example for Open/Closed Principle
 * 
 * Every time a new shape is added, this class MUST be modified.
 * What breaks Open/Closed Principle here?
 * - Centralized decision logic
 * - Type checking (instanceof)
 * - Knowledge of every concrete shape
 * 
 * 
 * What happens when we add a new shape?
 * ``` 
 * class Triangle {
    constructor(public base: number, public height: number) {}
 * }
 *  ```
 * To support Triangle, we must:
 * - You must modify AreaCalculator
 * - Existing, working code changes
 * - Risk of regressions increases
 */

class RectangleShape {
    constructor(public width: number, public height: number) {}
}

class CircleShape {
    constructor(public radius: number) {}
}

class TrapeziumShape {
    constructor(
        public a: number,
        public b: number,
        public height: number
    ) {}
}

/**
 * AreaCalculator knows about ALL shapes
 * and must change whenever a new one appears
 */
class ComplexAreaCalculator {

    calculateArea(shape: any): number {

        if (shape instanceof RectangleShape) {
            return shape.width * shape.height;
        }

        if (shape instanceof CircleShape) {
            return Math.PI * shape.radius * shape.radius;
        }

        if (shape instanceof TrapeziumShape) {
            return ((shape.a + shape.b) / 2) * shape.height;
        }

        throw new Error("Unknown shape");
    }
}
