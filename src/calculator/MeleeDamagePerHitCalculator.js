module.exports = class MeleeDamagePerHitCalculator {
    constructor(effectiveLevelCalculator, maxHitCalculator, maxRollCalculator, accuracyCalculator) {
        this.effectiveLevelCalculator = effectiveLevelCalculator;
        this.maxHitCalculator = maxHitCalculator;
        this.maxRollCalculator = maxRollCalculator;
        this.accuracyCalculator = accuracyCalculator;
    }

    calculate(attacker, defender) {
        const attackerLevels = attacker.getLevels();
        const attackerPrayer = attacker.getPrayer();
        const attackerStance = attacker.getStance();
        const attackerEquipment = attacker.getEquipment();
        const attackerSpecialEquipment = attacker.getSpecialEquipment();

        const attackerEffectiveAttack = this.effectiveLevelCalculator.calculateAttack(
            attackerLevels,
            attackerPrayer,
            attackerStance
        );
        const attackerEffectiveStrength = this.effectiveLevelCalculator.calculateStrength(
            attackerLevels,
            attackerPrayer,
            attackerStance
        );
        const defenderEffectiveDefence = this.effectiveLevelCalculator.calculateDefence(
            defender.getLevels(),
            defender.getPrayer(),
            defender.getStance()
        );

        const maxHit = this.maxHitCalculator.calculate(
            attackerEffectiveStrength,
            attackerEquipment.getStrength(),
            attackerSpecialEquipment.getDamageMultiplier()
        );
        const offensiveMaxRoll = this.maxRollCalculator.calculate(
            attackerEffectiveAttack,
            attackerEquipment.getAccuracy(),
            attackerSpecialEquipment.getAccuracyMultiplier()
        );
        const defensiveMaxRoll = this.maxRollCalculator.calculate(
            defenderEffectiveDefence,
            defender.getEquipment().getDefence()
        );
        const accuracy = this.accuracyCalculator.calculate(offensiveMaxRoll, defensiveMaxRoll);

        // console.debug({
        //     attacker,
        //     defender,
        //     attackerEffectiveAttack,
        //     defenderEffectiveDefence,
        //     maxHit,
        //     offensiveMaxRoll,
        //     defensiveMaxRoll,
        //     accuracy
        // });

        return accuracy * maxHit / 2;
    }
}
