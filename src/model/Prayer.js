module.exports = class Prayer {
    constructor(attackMultiplier, strengthMultiplier, defenceMultiplier) {
        this.attackMultiplier = attackMultiplier;
        this.strengthMultiplier = strengthMultiplier;
        this.defenceMultiplier = defenceMultiplier;
    }

    getAttackMultiplier() {
        return this.attackMultiplier;
    }

    getStrengthMultiplier() {
        return this.strengthMultiplier;
    }

    getDefenceMultiplier() {
        return this.defenceMultiplier;
    }
}
