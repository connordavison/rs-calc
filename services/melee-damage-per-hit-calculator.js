const EffectiveLevelCalculator = require('./src/calculator/EffectiveLevelCalculator');
const MeleeDamagePerHitCalculator = require('./src/calculator/MeleeDamagePerHitCalculator');
const MaxHitCalculator = require('./src/calculator/MaxHitCalculator');
const MaxRollCalculator = require('./src/calculator/MaxRollCalculator');
const AccuracyCalculator = require('./src/calculator/AccuracyCalculator');

const meleeDamagePerHitCalculator = new MeleeDamagePerHitCalculator(
    new EffectiveLevelCalculator(),
    new MaxHitCalculator(),
    new MaxRollCalculator(),
    new AccuracyCalculator()
);

module.exports = meleeDamagePerHitCalculator;
