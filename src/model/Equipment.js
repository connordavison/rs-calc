module.exports = class Equipment {
    constructor(accuracy, strength, defence) {
        this.accuracy = accuracy;
        this.strength = strength;
        this.defence = defence;
    }

    getAccuracy() {
        return this.accuracy;
    }

    getStrength() {
        return this.strength;
    }

    getDefence() {
        return this.defence;
    }
}
