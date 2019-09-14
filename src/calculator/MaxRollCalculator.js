module.exports = class MaxRollCalculator {
    calculate(
        effectiveLevel,
        equipmentBonus,
        equipmentSpecialMultiplier
    ) {
        let maxRoll = Math.floor(effectiveLevel * (equipmentBonus + 64));

        if (equipmentSpecialMultiplier) {
            maxRoll = Math.floor(maxRoll * equipmentSpecialMultiplier);
        }

        return maxRoll;
    }
}
