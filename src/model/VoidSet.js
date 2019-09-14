module.exports = class VoidSet {
    constructor(damageMultiplier, accuracyMultiplier) {
        this.damageMultiplier = damageMultiplier;
        this.accuracyMultiplier = accuracyMultiplier;
    }

    getDamageMultiplier() {
        return this.damageMultiplier;
    }

    getAccuracyMultiplier() {
        return this.accuracyMultiplier;
    }
}
