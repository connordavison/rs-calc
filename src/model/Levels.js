module.exports = class Levels {
    constructor(attack, strength, defence) {
        this.attack = attack;
        this.strength = strength;
        this.defence = defence;
    }

    withIncrementedAttack() {
        return new Levels(this.attack + 1, this.strength);
    }

    withIncrementedStrength() {
        return new Levels(this.attack, this.strength + 1);
    }

    getAttack() {
        return this.attack;
    }

    getStrength() {
        return this.strength;
    }

    getDefence() {
        return this.defence;
    }
}
