/**
 * BETTER Example for Interface Segregation Principle
 * 
 * By segregating the large WorkerForce interface into smaller,
 * focused interfaces, classes only implement what they actually need.
 * 
 * Benefits:
 * - Human only implements Workable and Eatable
 * - Robot only implements Workable and Repairable
 * - No forced implementations of unnecessary methods
 * - Each interface has a single, specific purpose
 * - Classes depend only on what they use
 */

// Segregated interfaces - each with a specific purpose
interface Worker_ {
    work(): void;
}

interface Eater {
    eat(): void;
}

interface Fixer {
    repair(): void;
}

// Human implements only the interfaces it needs
class BetterHuman implements Worker_, Eater {
    work(): void {
        console.log("Human is working");
    }
    eat(): void {
        console.log("Human is eating");
    }
}

// Robot implements only the interfaces it needs
class BetterRobot implements Worker_, Fixer {
    work(): void {
        console.log("Robot is working");
    }
    repair(): void {
        console.log("Robot is repairing machinery");
    }
}