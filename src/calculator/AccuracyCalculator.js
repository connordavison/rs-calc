module.exports = class AccuracyCalculator {
    calculate(offensiveMaxRoll, defensiveMaxRoll) {
        if (offensiveMaxRoll > defensiveMaxRoll) {
            return this.calculateUndefendedAccuracy(offensiveMaxRoll, defensiveMaxRoll);
        } else {
            return this.calculateDefendedAccuracy(offensiveMaxRoll, defensiveMaxRoll);
        }
    }

    calculateUndefendedAccuracy(offensiveMaxRoll, defensiveMaxRoll) {
        return 1 - (defensiveMaxRoll + 2) / (2 * (offensiveMaxRoll + 1));
    }

    calculateDefendedAccuracy(offensiveMaxRoll, defensiveMaxRoll) {
        return offensiveMaxRoll / (2 * (defensiveMaxRoll + 1));
    }
}
