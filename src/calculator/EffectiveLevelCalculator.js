module.exports = class EffectiveLevelCalculator {
    calculateStrength(levels, prayer, stance, voidSet) {
        return this.calculate(
            levels.getStrength(),
            prayer.getStrengthMultiplier(),
            stance.getStrengthBonus(),
            voidSet ? voidSet.getDamageMultiplier() : null
        );
    }

    calculateAttack(levels, prayer, stance, voidSet) {
        return this.calculate(
            levels.getAttack(),
            prayer.getAttackMultiplier(),
            stance.getAttackBonus(),
            voidSet ? voidSet.getDamageMultiplier() : null
        );
    }

    calculateDefence(levels, prayer, stance) {
        return this.calculate(
            levels.getDefence(),
            prayer.getDefenceMultiplier(),
            stance.getDefenceBonus(),
            null
        );
    }

    calculate(level, prayerMultiplier, stanceBonus, voidSetMultiplier) {
        let effectiveLevel = level;

        if (prayerMultiplier) {
            effectiveLevel *= prayerMultiplier;
        }

        effectiveLevel = Math.floor(effectiveLevel) + stanceBonus + 8;

        if (voidSetMultiplier) {
            effectiveLevel *= voidSetMultiplier;
        }

        return Math.floor(effectiveLevel);
    }
}
