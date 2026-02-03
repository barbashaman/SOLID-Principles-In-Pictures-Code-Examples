/**
 * BAD Example for Single Responsibility Principle
 */

/**
 * Bad Example for Single Responsibility Principle
 * This class violates SRP by handling multiple responsibilities:
 * 
 * - Player state & attributes
 * - Weapon management
 * - Combat logic
 * 
 * A class should have only ONE reason to change.
 * This class changes if we modify player stats, weapon logic, or combat rules.
 */

class BadPlayer {
    private name: string;
    private health: number;
    private attackPower: number;
    private defense: number;

    // Weapon data
    private weaponName: string | null;
    private weaponDamage: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.attackPower = 10;
        this.defense = 5;
        this.weaponName = null;
        this.weaponDamage = 0;
    }

    // Weapon management
    equipWeapon(name: string, damage: number): void {
        this.weaponName = name;
        this.weaponDamage = damage;
    }

    unequipWeapon(): void {
        this.weaponName = null;
        this.weaponDamage = 0;
    }

    // Combat logic
    attack(): number {
        return this.attackPower + this.weaponDamage;
    }

    takeDamage(amount: number): void {
        const reducedDamage = Math.max(amount - this.defense, 0);
        this.health -= reducedDamage;

        if (this.health < 0) {
            this.health = 0;
        }
    }

    getStatus() {
        return {
            name: this.name,
            health: this.health,
            weapon: this.weaponName
        };
    }
}

