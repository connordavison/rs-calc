module.exports = class SpecialEquipment {
    constructor(accuracyMultiplier, damageMultiplier) {
        this.accuracyMultiplier = accuracyMultiplier;
        this.damageMultiplier = damageMultiplier;
    }

    getAccuracyMultiplier() {
        return this.accuracyMultiplier;
    }

    getDamageMultiplier() {
        return this.damageMultiplier;
    }
}
