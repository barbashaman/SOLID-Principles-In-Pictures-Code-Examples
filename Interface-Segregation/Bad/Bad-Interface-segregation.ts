/**
 * BAD Example for Interface Segregation Principle
 * 
 * Interface Segregation Principle states that clients should not be forced
 * to depend on interfaces they don't use.
 * 
 * This example violates ISP because:
 * - MyWorker interface requires ALL methods
 * - Robots must implement work() and eat() even though they don't eat
 * - Humans must implement work() and repair() even though they don't repair machines
 * - Classes are forced to implement methods they don't need
 */

interface WorkerForce {
    work(): void;
    eat(): void;
    repair(): void;
}

class Human implements WorkerForce {
    work(): void {
        console.log("Human is working");
    }
    eat(): void {
        console.log("Human is eating");
    }
    repair(): void {
        throw new Error("Humans cannot repair machinery"); // ISP Violation
    }
}

class Robot implements WorkerForce {
    work(): void {
        console.log("Robot is working");
    }
    eat(): void {
        throw new Error("Robots cannot eat"); // ISP Violation (Artificial Inteligence is a movie that scarred me as a kid...)
    }
    repair(): void {
        console.log("Robot is repairing machinery");
    }
}