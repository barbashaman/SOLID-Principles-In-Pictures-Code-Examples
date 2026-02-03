/**
 * BETTER Example for Liskov Substitution Principle
 * 
 * By segregating the Bird interface into more specific contracts,
 * all subclasses can properly implement their methods without throwing errors.
 * 
 * Now:
 * - FlyingBird is for birds that can actually fly
 * - Bird is for any bird
 * - All implementations fulfill their contracts
 * - Substitution works correctly!
 */

// Base interface for all birds
interface Bird {
    eat(): void;
}

// Specific interface for flying birds
interface FlyingBird extends Bird {
    fly(): void;
}

interface SwimmingBird extends Bird {
    swim(): void;
}

class Sparrow implements FlyingBird {
    fly(): void {
        console.log("Sparrow is flying");
    }
    eat(): void {
        console.log("Sparrow is eating");
    }
}

class ProudPenguin implements SwimmingBird {
    eat(): void {
        console.log("Penguin is eating");
    }
    swim(): void {
        console.log("Penguin is swimming");
    }
}

// This function only accepts birds that can actually fly
function makeFlyingBirdFly(bird: FlyingBird): void {
    bird.fly(); // Safe! Will never crash
}

// Usage that works correctly:
const mySparrow = new Sparrow();
makeBirdFly(mySparrow); // ✓ Works!

const myProudPenguin = new ProudPenguin();
// makeBirdFly(myProudPenguin); // ✗ Won't compile - ProudPenguin is not a FlyingBird