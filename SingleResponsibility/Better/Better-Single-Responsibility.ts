/**
 * BETTER Example for Single Responsibility Principle
 */


/**
 * Player acts as a coordinator / identity holder
 * 
 * Benefits:
 * - Each class has one reason to change
 * - Easier to test and extend
 * - Weapon logic can evolve independently
 * - Combat rules don't affect equipment
 * - Clean separation of concerns
 * 
 */

class BetterPlayer {
    constructor(
        public readonly name: string,
        public readonly stats: PlayerStats,
        public readonly equipment: Equipment
    ) {}
}

/**
 * Player attributes - Single Responsibility: manage player stats
 */
class PlayerStats {
    health: number;
    attack: number;
    defense: number;

    constructor() {
        this.health = 100;
        this.attack = 10;
        this.defense = 5;
    }
}

/**
 * Weapon data model - Single Responsibility: represent weapon properties
 */
class Weapon {
    constructor(
        public readonly name: string,
        public readonly damage: number
    ) {}
}

/**
 * Equipment responsibility - Single Responsibility: manage equipped weapons
 */
class Equipment {
    private weapon: Weapon | null = null;

    equipWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    unequipWeapon(): void {
        this.weapon = null;
    }

    getWeaponDamage(): number {
        return this.weapon?.damage ?? 0;
    }
}

/**
 * Combat service - Single Responsibility: handle combat calculations
 */
class CombatService {
    calculateAttackDamage(stats: PlayerStats, equipment: Equipment): number {
        return stats.attack + equipment.getWeaponDamage();
    }

    applyDamage(stats: PlayerStats, damage: number): void {
        const reducedDamage = Math.max(damage - stats.defense, 0);
        stats.health -= reducedDamage;

        if (stats.health < 0) {
            stats.health = 0;
        }
    }
}
