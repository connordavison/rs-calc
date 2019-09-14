module.exports = class Stance {
    constructor(attackBonus, strengthBonus, defenceBonus) {
        this.attackBonus = attackBonus;
        this.strengthBonus = strengthBonus;
        this.defenceBonus = defenceBonus;
    }

    getAttackBonus() {
        return this.attackBonus;
    }

    getStrengthBonus() {
        return this.strengthBonus;
    }

    getDefenceBonus() {
        return this.defenceBonus;
    }
}
