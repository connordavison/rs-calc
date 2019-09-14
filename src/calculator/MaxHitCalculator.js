/**
 * Melee/ranged max hit calculator
 */
module.exports = class MaxHitCalculator {
    calculate(
        effectiveLevel,
        equipmentBonus,
        equipmentSpecialMultiplier
    ) {
        let max = Math.floor(
            0.5 + effectiveLevel * (equipmentBonus + 64) / 640
        );

        if (equipmentSpecialMultiplier) {
            max = Math.floor(max * equipmentSpecialMultiplier);
        }

        return max;
    }
}
