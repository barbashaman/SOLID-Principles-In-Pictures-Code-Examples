/**
 * BAD Example for Liskov Substitution Principle
 * 
 * Liskov Substitution Principle states that objects of a superclass
 * should be replaceable with objects of its subclasses WITHOUT breaking the application.
 * 
 * This example violates LSP because:
 * - Bird contract promises all birds can fly()
 * - Penguin and Ostrich can't fly but must implement it
 * - Code expecting Bird will crash when it encounters these subclasses
 */

interface Bird {
    fly(): void;
    eat(): void;
}

class Eagle implements Bird {
    fly(): void {
        console.log("Eagle is flying");
    }
    eat(): void {
        console.log("Eagle is eating");
    }
}

class FrustratedPenguin implements Bird {
    fly(): void {
        throw new Error("Penguins can't fly!"); // LSP Violation
    }
    eat(): void {
        console.log("Penguin is eating");
    }
}

// This function expects a Bird and assumes it can fly
function makeBirdFly(bird: Bird): void {
    bird.fly(); // Will crash if bird is a Penguin!
}

// Usage that breaks:
const myFrustratedPenguin = new FrustratedPenguin();
makeBirdFly(myFrustratedPenguin); // Runtime error!