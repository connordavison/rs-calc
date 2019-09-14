module.exports = class Combattant {
    constructor(levels, prayer, stance, equipment, specialEquipment) {
        this.levels = levels;
        this.prayer = prayer;
        this.stance = stance;
        this.equipment = equipment;
        this.specialEquipment = specialEquipment;
    }

    getLevels() {
        return this.levels;
    }

    getPrayer() {
        return this.prayer;
    }

    getStance() {
        return this.stance;
    }

    getEquipment() {
        return this.equipment;
    }

    getSpecialEquipment() {
        return this.specialEquipment;
    }

    withIncrementedStrength() {
        return new Combattant(
            this.levels.withIncrementedStrength(),
            this.prayer,
            this.stance,
            this.equipment,
            this.specialEquipment
        );
    }

    withIncrementedAttack() {
        return new Combattant(
            this.levels.withIncrementedAttack(),
            this.prayer,
            this.stance,
            this.equipment,
            this.specialEquipment
        );
    }
}
